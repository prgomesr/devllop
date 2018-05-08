import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {MatNativeDateModule} from '@angular/material';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import {CoreRoutingModule} from './core-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ErrorHandlerService} from './error-handler-service';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CoreRoutingModule,
    MatNativeDateModule
  ],
  declarations: [NavbarComponent, LayoutComponent, LoginComponent],
  exports: [NavbarComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ErrorHandlerService
  ]
})
export class CoreModule { }
