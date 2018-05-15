import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TipoLancamentoComponent} from './tipo-lancamento.component';

const routes: Routes = [
  {path: '', component: TipoLancamentoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoLancamentoRoutingModule {
}

export const routedComponents = [TipoLancamentoComponent];
