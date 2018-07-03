import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ClienteService} from './cliente.service';
import {Cliente} from '../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {EstadoCivilService} from './estado-civil.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {InstanciasFiltro} from '../../core/InstanciasFiltro';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = [];
  estados = [];
  sexos = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'}
  ];
  situacoes = [
    {label: 'Em dia', value: 'EM DIA'}
  ];
  status = [
    {label: 'Ativo', value: 'true'},
    {label: 'Inativo', value: 'false'}
  ];
  cliente = new Cliente();
  index = 0;
  modalRef: BsModalRef;
  id: number;
  totalRegistros = 0;
  filtro = new InstanciasFiltro();
  constructor(private clienteService: ClienteService,
              private estadoCivilService: EstadoCivilService,
              private modalService: BsModalService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {}

  getAll(pagina = 0) {
    this.spinner.show();
    this.filtro.pagina = pagina;
    this.clienteService.list(this.filtro).subscribe(dados => {
        this.spinner.hide();
        this.clientes = dados.registros;
        this.totalRegistros = dados.total;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.getAll(pagina);
  }

  getEstadosCivis() {
    this.spinner.show();
    this.estadoCivilService.getAll().subscribe(dados => {
        this.spinner.hide();
        this.estados = dados
          .map(d => ({label: d.descricao, value: d.id}));
      },
      err => {
        this.spinner.hide();
        this.errorHandler.handle(err);
      });
  }

  getById(id: number) {
    this.spinner.show();
    this.clienteService.read(id).subscribe(dado => {
        this.spinner.hide();
        this.cliente = dado;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.index = 0;
    this.getEstadosCivis();
    if (id) {
      this.getById(id);
    } else {
      this.cliente = new Cliente();
    }
  }

  openSearchModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
  }

  onSubmit(form: FormControl) {
    if (this.editando) {
      this.updateModel(form);
    } else {
      this.createModel(form);
    }
  }

  createModel(form: FormControl) {
    this.spinner.show();
    this.clienteService.create(this.cliente).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente cadastrado com sucesso.'});
        form.reset({cpf: '', tel_principal: '',
          tel_secundario: '', endereco: {cep: ''}});
        this.getAll();
        // this.modalRef.hide();
      },
      err => {
        this.spinner.hide();
        this.errorHandler.handle(err);
      });
  }

  updateModel(form: FormControl) {
    this.spinner.show();
    this.clienteService.update(this.cliente).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente atualizado com sucesso.'});
        form.reset();
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  updateStatus(id: number, status: boolean) {
    if (id) {
      this.spinner.show();
      this.clienteService.updateStatus(id, status).subscribe(() => {
        this.spinner.hide();
        this.getAll();
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente atualizado com sucesso.'});
      },
        error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
        });
    }
  }

  delete(id: number) {
    this.clienteService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente excluído com sucesso.'});
        this.getAll();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  openConfirmModal(template: TemplateRef<any>, id: number) {
    this.id = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(id: number) {
    id = this.id;
    this.delete(id);
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  consultaCep(cep, form) {
    cep = cep.replace(/\D/g, '');
    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.spinner.show();
        this.clienteService.getCep(cep).subscribe(dados => {
            this.spinner.hide();
            this.popularEndereco(dados, form);
          },
          err => {
            this.spinner.hide();
            this.errorHandler.handle(err);
          });
      }
    }
  }

  popularEndereco(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  get editando(): any {
    return Boolean (this.cliente.id);
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

}
