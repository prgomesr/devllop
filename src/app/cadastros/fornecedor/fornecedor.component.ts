import {Component, OnInit, TemplateRef} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {FornecedorService} from './fornecedor.service';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {Fornecedor} from '../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [];
  fornecedor = new Fornecedor();
  index = 0;
  modalRef: BsModalRef;
  id: number;
  constructor(private fornecedorService: FornecedorService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    return this.fornecedorService.list().subscribe(dados => this.fornecedores = dados,
      err => this.errorHandler.handle(err));
  }

  delete(id: number) {
    this.fornecedorService.delete(id).subscribe(() => {
      this.toasty.success({title: 'Parabéns!', msg: 'Fornecedor excluído com sucesso.'});
      this.getAll();
    }
    , error1 => this.errorHandler.handle(error1));
  }

  onSubmit(form) {
    if (this.editando) {
      this.updateModel(form);
    } else {
      this.createModel(form);
    }
  }

  getById(id: number) {
    this.fornecedorService.read(id).subscribe(dado => this.fornecedor = dado,
      err => this.errorHandler.handle(err));
  }

  createModel(form: FormControl) {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Fornecedor cadastrado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Fornecedor atualizado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

  getErrorMessage(campo: any) {
    return campo.hasError('required') ? 'Este campo é obrigatório!' :
      campo.hasError('email') ? 'E-mail inválido!' :
        '';
  }

  consultaCep(cep, form) {
    cep = cep.replace(/\D/g, '');
    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.fornecedorService.getCep(cep).subscribe(dados => this.popularEndereco(dados, form),
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

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.index = 0;
    if (id) {
      this.getById(id);
    } else {
      this.fornecedor = new Fornecedor();
    }
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
    return Boolean (this.fornecedor.ID);
  }

}
