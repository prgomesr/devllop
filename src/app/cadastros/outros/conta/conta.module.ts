import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {ContaRoutingModule} from './conta-routing.module';
import {ContaService} from './conta.service';
import {ContaComponent} from './conta.component';
import {EmpresaService} from '../../empresa/empresa.service';
import {AgenciaService} from '../agencia/agencia.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContaRoutingModule
  ],
  declarations: [ContaComponent],
  providers: [ContaService, EmpresaService, AgenciaService]
})
export class ContaModule { }
