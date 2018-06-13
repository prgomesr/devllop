import {Component, OnInit, TemplateRef} from '@angular/core';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ContaService} from './conta.service';
import {Agencia, Conta} from '../../../core/model';
import {FormControl} from '@angular/forms';
import {EmpresaService} from '../../empresa/empresa.service';
import {AgenciaService} from '../agencia/agencia.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  contas = [];
  empresas = [];
  agencias = [];
  conta = new Conta();
  id: number;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private contaService: ContaService,
              private empresaService: EmpresaService,
              private agenciaService: AgenciaService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.spinner.show();
    this.contaService.list().subscribe(dados => {
        this.spinner.hide();
        this.contas = dados;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getAllEmpresas() {
    this.spinner.show();
    this.empresaService.list().subscribe(dados => {
        this.spinner.hide();
        this.empresas = dados
          .map(d => ({value: d.id, label: d.razaoSocial}));
      },
     error1 => {
        this.spinner.hide();
       this.errorHandler.handle(error1);
     });
  }

  getAllAgencias() {
    this.spinner.show();
    this.agenciaService.list().subscribe(dados => {
        this.spinner.hide();
        this.agencias = dados
          .map(d => ({value: d.id, label: d.numero}));
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  getById(id: number) {
    this.spinner.show();
    this.contaService.read(id).subscribe(dado => {
        this.spinner.hide();
        this.conta = dado;
      },
      error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.getAllEmpresas();
    this.getAllAgencias();
    if (id) {
      this.getById(id);
    } else {
      this.conta = new Conta();
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
    this.contaService.create(this.conta).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Conta cadastrada com sucesso.'});
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
    this.contaService.update(this.conta).subscribe(() => {
        this.spinner.hide();
        this.toasty.success({title: 'Parabéns!', msg: 'Conta atualizada com sucesso.'});
        this.getAll();
        this.modalRef.hide();
      }
      , error1 => {
        this.spinner.hide();
        this.errorHandler.handle(error1);
      });
  }

  delete(id: number) {
    this.contaService.delete(id).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Conta excluída com sucesso.'});
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
    return Boolean (this.conta.id);
  }

}
