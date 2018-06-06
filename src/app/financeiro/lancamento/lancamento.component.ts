import {Component, OnInit, TemplateRef} from '@angular/core';
import {Lancamento} from '../../core/model';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {ToastyService} from 'ng2-toasty';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ContaService} from '../../cadastros/outros/conta/conta.service';
import {CategoriaService} from '../../cadastros/outros/categoria/categoria-service';
import {TipoLancamentoService} from '../../cadastros/outros/tipo-lancamento/tipo-lancamento.service';
import {FornecedorService} from '../../cadastros/fornecedor/fornecedor.service';
import {ClienteService} from '../../cadastros/cliente/cliente.service';
import {LancamentoService} from './lancamento.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  lancamentos = [];
  contas = [];
  categorias = [];
  tipos = [];
  fornecedores = [];
  clientes = [];
  id = 0;
  index: number;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  lancamento = new Lancamento();
  options = [];
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private lancamentoService: LancamentoService,
              private contaService: ContaService,
              private categoriaService: CategoriaService,
              private tipoService: TipoLancamentoService,
              private fornecedorService: FornecedorService,
              private clienteService: ClienteService) {
    this.options = [
      {label: 'Receita', value: 'RECEITA', icon: 'fa fa-plus-square'},
      {label: 'Despesa', value: 'DESPESA', icon: 'fa fa-minus-square'}
    ];
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.lancamentoService.list().subscribe(dados => this.lancamentos = dados,
      error1 => this.errorHandler.handle(error1));
  }

  getAllContas() {
    this.contaService.list().subscribe(dados => this.contas = dados
        .map(d => ({value: d.id, label: d.descricao})),
      error1 => this.errorHandler.handle(error1));
  }

  getAllCategorias() {
    this.categoriaService.list().subscribe(dados => this.categorias = dados
        .map(d => ({value: d.id, label: d.descricao})),
      error1 => this.errorHandler.handle(error1));
  }

  getAllTipos() {
    this.tipoService.list().subscribe(dados => this.tipos = dados
        .map(d => ({value: d.id, label: d.descricao})),
      error1 => this.errorHandler.handle(error1));
  }

  getAllFornecedores() {
    this.fornecedorService.list().subscribe(dados => this.fornecedores = dados
        .map(d => ({value: d.id, label: d.razaoSocial})),
      error1 => this.errorHandler.handle(error1));
  }

  getAllClientes() {
    this.clienteService.list().subscribe(dados => this.clientes = dados
        .map(d => ({value: d.id, label: d.nome})),
      error1 => this.errorHandler.handle(error1));
  }

  getById(id: number) {
    this.lancamentoService.read(id).subscribe(dado => this.lancamento = dado,
      error1 => this.errorHandler.handle(error1));
  }

  openFormModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template, {class: 'modal-devllop'});
    this.close();
    this.getAllContas();
    this.getAllCategorias();
    this.getAllTipos();
    this.getAllFornecedores();
    this.getAllClientes();
    if (id) {
      this.getById(id);
    }
  }

  openSelectModal(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'modal-sm' });
    this.lancamento = new Lancamento();
  }

  close() {
    if (this.modalRef2) {
      this.modalRef2.hide();
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
    this.lancamentoService.create(this.lancamento).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Lançamento cadastrado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.lancamentoService.update(this.lancamento).subscribe(() => {
        this.toasty.success({title: 'Parabéns!', msg: 'Lançamento atualizado com sucesso.'});
        this.getAll();
        this.modalRef.hide();
        console.log(form.value);
      }
      , error1 => this.errorHandler.handle(error1));
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

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

}
