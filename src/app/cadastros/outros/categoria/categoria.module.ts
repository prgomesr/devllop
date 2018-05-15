import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaComponent} from './categoria.component';
import {SharedModule} from '../../../shared/shared.module';
import {CategoriaRoutingModule} from './categoria-routing.module';
import {CategoriaService} from './categoria-service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutingModule
  ],
  declarations: [CategoriaComponent],
  providers: [CategoriaService]
})
export class CategoriaModule { }
