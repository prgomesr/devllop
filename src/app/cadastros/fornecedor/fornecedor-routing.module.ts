import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FornecedorComponent} from './fornecedor.component';
import {FornecedorDataComponent} from './fornecedor-data/fornecedor-data.component';

const routes: Routes = [
  {path: '', component: FornecedorComponent},
  {path: 'novo', component: FornecedorDataComponent},
  {path: 'editar/:id', component: FornecedorDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornecedorRoutingModule {
}

export const routedComponents = [FornecedorComponent];
