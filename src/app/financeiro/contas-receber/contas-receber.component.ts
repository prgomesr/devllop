import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ParcelaReceber} from '../../core/model';
import {InstanciasFiltro} from '../../core/InstanciasFiltro';
import {ContasReceberService} from './contas-receber.service';
import {LazyLoadEvent} from 'primeng/api';
import {ContaService} from '../../cadastros/outros/conta/conta.service';
import {CategoriaRecebimentoService} from '../../cadastros/outros/categoria-recebimento/categoria-recebimento.service';
import {ClienteService} from '../../cadastros/cliente/cliente.service';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  lancamentos = [];
  lancamento = new ParcelaReceber();
  contas = [];
  categorias = [];
  clientes = [];
  id = 0;
  index: number;
  modalRef: BsModalRef;
  filtro = new InstanciasFiltro();
  totalRegistros = 0;
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private spinner: NgxSpinnerService,
              private lancamentoService: ContasReceberService,
              private contaService: ContaService,
              private categoriaService: CategoriaRecebimentoService,
              private clienteService: ClienteService) { }

  ngOnInit() {}

  getAll(pagina = 0) {
    this.spinner.show();
    this.filtro.pagina = pagina;
    this.lancamentoService.list(this.filtro).subscribe(dados => {
        this.spinner.hide();
        this.lancamentos = dados.registros;
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

  getAllContas() {
    this.spinner.show();
    this.contaService.list().subscribe(dados => {
        this.spinner.hide();
        this.contas = dados
          .map(d => ({value: d.id, label: d.descricao}));
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getAllCategorias() {
    this.spinner.show();
    this.categoriaService.list().subscribe(dados => {
        this.spinner.hide();
        this.categorias = dados
          .map(d => ({value: d.id, label: d.descricao}));
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getAllClientes() {
    this.spinner.show();
    this.clienteService.list(this.filtro).subscribe(dados => {
        this.spinner.hide();
        this.clientes = dados.registros
          .map(d => ({value: d.id, label: d.nome}));
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getById(id: number) {
    this.spinner.show();
    this.lancamentoService.read(id).subscribe(dado => {
        this.spinner.hide();
        this.lancamento = dado;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.index = 0;
    this.getAllContas();
    this.getAllCategorias();
    this.getAllClientes();
    if (id) {
      this.getById(id);
    } else {
      this.lancamento = new ParcelaReceber();
    }
  }

  onSubmit(form) {
    if (this.editando) {
      this.updateModel(form);
    } else {
      this.createModel(form);
    }
  }

  createModel(form: FormControl) {
    this.spinner.show();
    this.lancamentoService.create(this.lancamento).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Lançamento cadastrado com sucesso.'});
        form.reset();
        this.getAll();
        this.modalRef.hide();
      },
      err => {
        this.spinner.hide();
        this.errorHandler.handle(err);
      });
  }

  updateModel(form: FormControl) {
    this.spinner.show();
    this.lancamentoService.update(this.lancamento).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Lançamento atualizado com sucesso.'});
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
      this.lancamentoService.updateStatus(id, status).subscribe(() => {
          this.spinner.hide();
          this.getAll();
          this.toasty.success({title: 'Parabéns!', msg: 'Lançamento atualizado com sucesso.'});
        },
        error1 => {
          this.spinner.hide();
          this.errorHandler.handle(error1);
        });
    }
  }

  delete(id: number) {
    this.lancamentoService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Lançamento excluído com sucesso.'});
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


  get editando(): any {
    return Boolean (this.lancamento.id);
  }

}
