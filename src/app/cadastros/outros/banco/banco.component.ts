import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Banco} from '../../../core/model';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {BancoService} from './banco.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  id: number;
  modalRef: BsModalRef;
  bancos = [];
  banco = new Banco();
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private bancoService: BancoService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.spinner.show();
    this.bancoService.list().subscribe(dados => this.bancos = dados,
      error1 => this.errorHandler.handle(error1));
  }

  getById(id: number) {
    this.bancoService.read(id).subscribe(dado => this.banco = dado,
      error1 => this.errorHandler.handle(error1));
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    if (id) {
      this.getById(id);
    } else {
      this.banco = new Banco();
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
    this.bancoService.create(this.banco).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Banco cadastrado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.bancoService.update(this.banco).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Banco atualizado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  delete(id: number) {
    this.bancoService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Banco excluído com sucesso.'});
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
    return Boolean (this.banco.id);
  }

}
