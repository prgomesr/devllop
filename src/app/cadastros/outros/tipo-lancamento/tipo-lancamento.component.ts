import {Component, OnInit, TemplateRef} from '@angular/core';
import {TipoLancamento} from '../../../core/model';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TipoLancamentoService} from './tipo-lancamento.service';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {FormControl} from '@angular/forms';
import {ToastyService} from 'ng2-toasty';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-tipo-lancamento',
  templateUrl: './tipo-lancamento.component.html',
  styleUrls: ['./tipo-lancamento.component.css']
})
export class TipoLancamentoComponent implements OnInit {

  tipos = [
    {id: 1, descricao: 'Dinheiro'}
  ];
  id: number;
  modalRef: BsModalRef;
  tipo = new TipoLancamento();
  constructor(private modalService: BsModalService,
              private tipoService: TipoLancamentoService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.spinner.show();
    this.tipoService.list().subscribe(dados => {
        this.spinner.hide();
        this.tipos = dados;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getById(id: number) {
    this.spinner.show();
    this.tipoService.read(id).subscribe(dado => {
        this.spinner.hide();
        this.tipo = dado;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
    if (id) {
      this.getById(id);
    } else {
      this.tipo = new TipoLancamento();
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
    this.tipoService.create(this.tipo).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Tipo de Lançamento cadastrado com sucesso.'});
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
    this.tipoService.update(this.tipo).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Tipo de Lançamento atualizado com sucesso.'});
        form.reset();
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  delete(id: number) {
    this.tipoService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Tipo de Lançamento excluído com sucesso.'});
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
    return Boolean (this.tipo.id);
  }

}
