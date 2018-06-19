import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContasReceberComponent} from './contas-receber.component';

const routes: Routes = [
  {path: '', component: ContasReceberComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberRoutingModule {
}

export const routedComponents = [ContasReceberComponent];
