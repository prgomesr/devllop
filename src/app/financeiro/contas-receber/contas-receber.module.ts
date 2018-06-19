import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContasReceberRoutingModule} from './contas-receber-routing.module';
import {ContasReceberComponent} from './contas-receber.component';
import {SharedModule} from '../../shared/shared.module';
import {ContasReceberService} from './contas-receber.service';
import {ContaService} from '../../cadastros/outros/conta/conta.service';
import {CategoriaRecebimentoService} from '../../cadastros/outros/categoria-recebimento/categoria-recebimento.service';
import {ClienteService} from '../../cadastros/cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContasReceberRoutingModule
  ],
  declarations: [ContasReceberComponent],
  providers: [ContasReceberService, ContaService, CategoriaRecebimentoService, ClienteService]
})
export class ContasReceberModule { }
