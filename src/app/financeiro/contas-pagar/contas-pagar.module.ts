import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContasPagarRoutingModule} from './contas-pagar-routing.module';
import {ContasPagarComponent} from './contas-pagar.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasPagarRoutingModule
  ],
  declarations: [ContasPagarComponent]
})
export class ContasPagarModule { }
