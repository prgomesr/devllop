import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ContaRoutingModule} from './conta-routing.module';
import {ContaService} from './conta.service';
import {ContaComponent} from './conta.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContaRoutingModule
  ],
  declarations: [ContaComponent],
  providers: [ContaService]
})
export class ContaModule { }
