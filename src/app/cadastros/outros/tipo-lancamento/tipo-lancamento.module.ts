import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TipoLancamentoRoutingModule} from './tipo-lancamento-rounting.module';
import {TipoLancamentoComponent} from './tipo-lancamento.component';
import {SharedModule} from '../../../shared/shared.module';
import {TipoLancamentoService} from './tipo-lancamento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipoLancamentoRoutingModule
  ],
  declarations: [TipoLancamentoComponent],
  providers: [TipoLancamentoService]
})
export class TipoLancamentoModule { }
