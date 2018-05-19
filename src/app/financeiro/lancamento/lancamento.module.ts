import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {LancamentoRoutingModule} from './lancamento-routing.module';
import {LancamentoComponent} from './lancamento.component';
import {LancamentoService} from './lancamento.service';
import {ContaService} from '../../cadastros/outros/conta/conta.service';
import {CategoriaService} from '../../cadastros/outros/categoria/categoria-service';
import {TipoLancamentoService} from '../../cadastros/outros/tipo-lancamento/tipo-lancamento.service';
import {FornecedorService} from '../../cadastros/fornecedor/fornecedor.service';
import {ClienteService} from '../../cadastros/cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LancamentoRoutingModule
  ],
  declarations: [LancamentoComponent],
  providers: [LancamentoService, ContaService, CategoriaService, TipoLancamentoService, FornecedorService, ClienteService]
})
export class LancamentoModule { }
