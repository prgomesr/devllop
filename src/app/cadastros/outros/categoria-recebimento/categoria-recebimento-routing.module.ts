import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategoriaRecebimentoComponent} from './categoria-recebimento.component';

const routes: Routes = [
  {path: '', component: CategoriaRecebimentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRecebimentoRoutingModule {
}

export const routedComponents = [CategoriaRecebimentoComponent];
