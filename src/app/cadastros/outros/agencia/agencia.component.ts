import {Component, OnInit, TemplateRef} from '@angular/core';
import {Agencia} from '../../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {AgenciaService} from './agencia.service';
import {FormControl} from '@angular/forms';
import {BancoService} from '../banco/banco.service';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {

  agencias = [];
  bancos = [];
  agencia = new Agencia();
  id: number;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private agenciaService: AgenciaService,
              private bancoService: BancoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.agenciaService.list().subscribe(dados => this.agencias = dados,
      error1 => this.errorHandler.handle(error1));
  }

  getById(id: number) {
    this.agenciaService.read(id).subscribe(dado => this.agencia = dado,
      error1 => this.errorHandler.handle(error1));
  }

  getAllBancos() {
    this.bancoService.list().subscribe(dados => this.bancos = dados
        .map(d => ({value: d.id, label: d.nome})),
      error1 => this.errorHandler.handle(error1));
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.getAllBancos();
    if (id) {
      this.getById(id);
    } else {
      this.agencia = new Agencia();
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
    this.agenciaService.create(this.agencia).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Agência cadastrada com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.agenciaService.update(this.agencia).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Agência atualizada com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  delete(id: number) {
    this.agenciaService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Agência excluída com sucesso.'});
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
    return Boolean (this.agencia.id);
  }

}
