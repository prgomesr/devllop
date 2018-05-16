import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BancoComponent} from './banco.component';

const routes: Routes = [
  {path: '', component: BancoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoRoutingModule {
}

export const routedComponents = [BancoComponent];
