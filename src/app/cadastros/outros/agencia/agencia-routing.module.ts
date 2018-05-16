import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AgenciaComponent} from './agencia.component';

const routes: Routes = [
  {path: '', component: AgenciaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciaRoutingModule {
}

export const routedComponents = [AgenciaComponent];
