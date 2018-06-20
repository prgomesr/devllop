import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ParcelaPagar} from '../../core/model';
import {InstanciasFiltro} from '../../core/InstanciasFiltro';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ContaService} from '../../cadastros/outros/conta/conta.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler-service';
import {FornecedorService} from '../../cadastros/fornecedor/fornecedor.service';
import {CategoriaPagamentoService} from '../../cadastros/outros/categoria-pagamento/categoria-pagamento.service';
import {LazyLoadEvent} from 'primeng/api';
import {ContasPagarService} from './contas-pagar.service';

@Component({
  selector: 'app-contas-pagar',
  templateUrl: './contas-pagar.component.html',
  styleUrls: ['./contas-pagar.component.css']
})
export class ContasPagarComponent implements OnInit {

  lancamentos = [];
  lancamento = new ParcelaPagar();
  contas = [];
  categorias = [];
  fornecedores = [];
  id = 0;
  index: number;
  modalRef: BsModalRef;
  filtro = new InstanciasFiltro();
  totalRegistros = 0;
  constructor(private modalService: BsModalService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private spinner: NgxSpinnerService,
              private lancamentoService: ContasPagarService,
              private contaService: ContaService,
              private categoriaService: CategoriaPagamentoService,
              private fornecedorService: FornecedorService) { }

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

  getAllFornecedores() {
    this.spinner.show();
    this.fornecedorService.list(this.filtro).subscribe(dados => {
        this.spinner.hide();
        this.fornecedores = dados.registros
          .map(d => ({value: d.id, label: d.razaoSocial}));
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
    this.getAllFornecedores();
    if (id) {
      this.getById(id);
    } else {
      this.lancamento = new ParcelaPagar();
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
