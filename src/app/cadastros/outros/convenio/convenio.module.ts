import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ConvenioRoutingModule} from './convenio-routing.module';
import {ConvenioComponent} from './convenio.component';
import {ConvenioService} from './convenio.service';
import {ContaService} from '../conta/conta.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConvenioRoutingModule
  ],
  declarations: [ConvenioComponent],
  providers: [ConvenioService, ContaService]
})
export class ConvenioModule { }
