import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Convenio} from '../../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {ConvenioService} from './convenio.service';
import {ContaService} from '../conta/conta.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {

  convenios = [];
  contas = [];
  convenio = new Convenio();
  id: number;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private convenioService: ConvenioService,
              private contaService: ContaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.convenioService.list().subscribe(dados => this.convenios = dados,
      error1 => this.errorHandler.handle(error1));
  }

  getAllContas() {
    this.contaService.list().subscribe(dados => this.contas = dados
        .map(d => ({value: d.id, label: d.numero})),
      error1 => this.errorHandler.handle(error1));
  }

  getById(id: number) {
    this.convenioService.read(id).subscribe(dado => this.convenio = dado,
      error1 => this.errorHandler.handle(error1));
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    this.getAllContas();
    if (id) {
      this.getById(id);
    } else {
      this.convenio = new Convenio();
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
    this.convenioService.create(this.convenio).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Convênio cadastrado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.convenioService.update(this.convenio).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Convênio atualizado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  delete(id: number) {
    this.convenioService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Convênio excluído com sucesso.'});
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
    return Boolean (this.convenio.id);
  }

}
