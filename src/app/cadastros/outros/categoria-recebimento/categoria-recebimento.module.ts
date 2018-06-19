import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {CategoriaRecebimentoRoutingModule} from './categoria-recebimento-routing.module';
import {CategoriaRecebimentoComponent} from './categoria-recebimento.component';
import {CategoriaRecebimentoService} from './categoria-recebimento.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRecebimentoRoutingModule
  ],
  declarations: [CategoriaRecebimentoComponent],
  providers: [CategoriaRecebimentoService]
})
export class CategoriaRecebimentoModule { }
