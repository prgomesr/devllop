import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {EmpresaRoutingModule} from './empresa-routing.module';
import {EmpresaComponent} from './empresa.component';
import {EmpresaService} from './empresa.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmpresaRoutingModule
  ],
  declarations: [EmpresaComponent],
  providers: [EmpresaService]
})
export class EmpresaModule { }
