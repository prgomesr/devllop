import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Empresa} from '../../core/model';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {EmpresaService} from './empresa.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresas = [];
  empresa = new Empresa();
  index = 0;
  modalRef: BsModalRef;
  id: number;
  constructor(private modalService: BsModalService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.empresaService.list().subscribe(dados => this.empresas = dados,
      error1 => this.errorHandler.handle(error1));
  }


  getById(id: number) {
    this.empresaService.read(id).subscribe(dado => this.empresa = dado,
      error1 => this.errorHandler.handle(error1));
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.index = 0;
    if (id) {
      this.getById(id);
    } else {
      this.empresa = new Empresa();
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
    this.empresaService.create(this.empresa).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Empresa cadastrada com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.empresaService.update(this.empresa).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Empresa atualizada com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => this.errorHandler.handle(error1));
  }

  delete(id: number) {
    this.empresaService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Empresa excluída com sucesso.'});
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
    return Boolean (this.empresa.id);
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

}
