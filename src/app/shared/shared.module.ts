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

import {HeaderLv1Component} from './header-lv1/header-lv1.component';
import {HeaderLv2Component} from './header-lv2/header-lv2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [HeaderLv1Component, HeaderLv2Component],
  exports: [TableModule, TooltipModule, HeaderLv1Component, HeaderLv2Component, ButtonModule, FormsModule, CommonModule, InputMaskModule,
  InputTextModule, CalendarModule, DropdownModule, RadioButtonModule]
})
export class SharedModule { }
