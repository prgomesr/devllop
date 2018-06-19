import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaPagamentoRoutingModule} from './categoria-pagamento-routing.module';
import {SharedModule} from '../../../shared/shared.module';
import {CategoriaPagamentoComponent} from './categoria-pagamento.component';
import {CategoriaPagamentoService} from './categoria-pagamento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaPagamentoRoutingModule
  ],
  declarations: [CategoriaPagamentoComponent],
  providers: [CategoriaPagamentoService]
})
export class CategoriaPagamentoModule { }
