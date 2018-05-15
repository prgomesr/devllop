import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'cliente', loadChildren: '../cadastros/cliente/cliente.module#ClienteModule' },
      { path: 'fornecedor', loadChildren: '../cadastros/fornecedor/fornecedor.module#FornecedorModule' },
      { path: 'outros/tipo-lancamento', loadChildren: '../cadastros/outros/tipo-lancamento/tipo-lancamento.module' +
        '#TipoLancamentoModule' },
      { path: 'outros/categoria', loadChildren: '../cadastros/outros/categoria/categoria.module#CategoriaModule' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
