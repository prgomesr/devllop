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

import {NgxMaskModule} from 'ngx-mask';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {HeaderLv1Component} from './header-lv1/header-lv1.component';
import {HeaderLv2Component} from './header-lv2/header-lv2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [HeaderLv1Component, HeaderLv2Component],
  exports: [TableModule, TooltipModule, HeaderLv1Component, HeaderLv2Component, ButtonModule, FormsModule, CommonModule, InputMaskModule,
  InputTextModule, CalendarModule, DropdownModule, RadioButtonModule, NgxMaskModule,
    MatTableModule, MatPaginatorModule, MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, FlexLayoutModule, MatCheckboxModule, MatStepperModule, MatExpansionModule, MatIconModule, MatDatepickerModule,
  MatAutocompleteModule]
})
export class SharedModule { }
