import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoriaPagamentoComponent} from './categoria-pagamento.component';

const routes: Routes = [
  {path: '', component: CategoriaPagamentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaPagamentoRoutingModule {
}

export const routedComponents = [CategoriaPagamentoComponent];
