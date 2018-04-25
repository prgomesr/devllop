import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-lv1',
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page"> {{heading}} </li>
          </ol>
        </nav>
      </div>
    </div>
    <!--<div class="ui-g">
      <h1 class="display-4">{{heading}}</h1>
      <hr>
    </div>-->
  `,
  styles: []
})
export class HeaderLv1Component  {
  @Input() heading: string;
}
