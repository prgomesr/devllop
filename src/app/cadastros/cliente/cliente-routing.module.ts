import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent} from './cliente.component';
import {ClienteDataComponent} from './cliente-data/cliente-data.component';

const routes: Routes = [
  {path: '', component: ClienteComponent},
  {path: 'novo', component: ClienteDataComponent},
  {path: 'editar/:id', component: ClienteDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {
}

export const routedComponents = [ClienteComponent];
