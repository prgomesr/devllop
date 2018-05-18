import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AccordionModule} from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';

import {NgxMaskModule} from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import {Ng2BRPipesModule} from 'ng2-brpipes';

import {HeaderLv1Component} from './header-lv1/header-lv1.component';
import {HeaderLv2Component} from './header-lv2/header-lv2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [HeaderLv1Component, HeaderLv2Component],
  exports: [TableModule, TooltipModule, HeaderLv1Component, HeaderLv2Component, ButtonModule, FormsModule, CommonModule, InputMaskModule,
  InputTextModule, CalendarModule, DropdownModule, RadioButtonModule, AccordionModule, CheckboxModule, InputTextareaModule, DialogModule,
    NgxMaskModule, ModalModule, NgxPhoneMaskBrModule, Ng2BRPipesModule, CurrencyMaskModule]
})
export class SharedModule { }
