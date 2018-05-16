import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {BancoRoutingModule} from './banco-routing.module';
import {BancoService} from './banco.service';
import {BancoComponent} from './banco.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BancoRoutingModule
  ],
  declarations: [BancoComponent],
  providers: [BancoService]
})
export class BancoModule { }
