import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContasPagarRoutingModule} from './contas-pagar-routing.module';
import {ContasPagarComponent} from './contas-pagar.component';
import {SharedModule} from '../../shared/shared.module';
import {ContasPagarService} from './contas-pagar.service';
import {FornecedorService} from '../../cadastros/fornecedor/fornecedor.service';
import {CategoriaPagamentoService} from '../../cadastros/outros/categoria-pagamento/categoria-pagamento.service';
import {ContaService} from '../../cadastros/outros/conta/conta.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasPagarRoutingModule
  ],
  declarations: [ContasPagarComponent],
  providers: [ContasPagarService, FornecedorService, CategoriaPagamentoService, ContaService]
})
export class ContasPagarModule { }
