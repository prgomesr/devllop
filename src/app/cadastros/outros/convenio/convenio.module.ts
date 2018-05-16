import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ConvenioRoutingModule} from './convenio-routing.module';
import {ConvenioComponent} from './convenio.component';
import {ConvenioService} from './convenio.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConvenioRoutingModule
  ],
  declarations: [ConvenioComponent],
  providers: [ConvenioService]
})
export class ConvenioModule { }
