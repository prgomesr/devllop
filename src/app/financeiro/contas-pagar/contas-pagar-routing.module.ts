import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContasPagarComponent} from './contas-pagar.component';

const routes: Routes = [
  {path: '', component: ContasPagarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasPagarRoutingModule {
}

export const routedComponents = [ContasPagarComponent];
