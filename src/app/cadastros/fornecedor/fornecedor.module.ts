import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';

import {FornecedorRoutingModule} from './fornecedor-routing.module';
import {FornecedorComponent} from './fornecedor.component';
import {FornecedorService} from './fornecedor.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FornecedorRoutingModule
  ],
  declarations: [FornecedorComponent],
  providers: [FornecedorService]
})
export class FornecedorModule { }
