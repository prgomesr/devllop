import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module';
import {ClienteComponent} from './cliente.component';
import {ClienteDataComponent} from './cliente-data/cliente-data.component';
import {ClienteRoutingModule} from './cliente-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ],
  declarations: [ClienteComponent, ClienteDataComponent]
})
export class ClienteModule { }
