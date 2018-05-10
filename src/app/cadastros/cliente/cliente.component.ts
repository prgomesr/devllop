import {Component, OnInit, TemplateRef} from '@angular/core';
import {ClienteService} from './cliente.service';
import {Cliente, EstadoCivil} from '../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormControl} from '@angular/forms';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {EstadoCivilService} from './estado-civil.service';

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
  cliente = new Cliente();
  index = 0;
  modalRef: BsModalRef;
  id: number;
  constructor(private clienteService: ClienteService,
              private estadoCivilService: EstadoCivilService,
              private modalService: BsModalService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.clienteService.list().subscribe(dados => this.clientes = dados,
      error1 => this.errorHandler.handle(error1));
  }

  getEstadosCivis() {
    this.estadoCivilService.getAll().subscribe(dados => this.estados = dados
        .map(d => ({label: d.descricao, value: d.id})),
      err => this.errorHandler.handle(err));
  }

  getById(id: number) {
    this.clienteService.read(id).subscribe(dado => this.cliente = dado,
      error1 => this.errorHandler.handle(error1));
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

  onSubmit(form) {
    if (this.editando) {
      this.updateModel(form);
    } else {
      this.createModel(form);
    }
  }

  createModel(form: FormControl) {
    this.clienteService.create(this.cliente).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente cadastrado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.clienteService.update(this.cliente).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Cliente atualizado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
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
        this.clienteService.getCep(cep).subscribe(dados => this.popularEndereco(dados, form),
          err => this.errorHandler.handle(err));
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
