import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';

import {HeaderLv1Component} from './header-lv1/header-lv1.component';
import {HeaderLv2Component} from './header-lv2/header-lv2.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    TooltipModule,
    ButtonModule
  ],
  declarations: [HeaderLv1Component, HeaderLv2Component],
  exports: [TableModule, TooltipModule, HeaderLv1Component, HeaderLv2Component, ButtonModule, FormsModule, CommonModule]
})
export class SharedModule { }
