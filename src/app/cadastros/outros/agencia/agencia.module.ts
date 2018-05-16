import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {AgenciaRoutingModule} from './agencia-routing.module';
import {AgenciaService} from './agencia.service';
import {AgenciaComponent} from './agencia.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgenciaRoutingModule
  ],
  declarations: [AgenciaComponent],
  providers: [AgenciaService]
})
export class AgenciaModule { }
