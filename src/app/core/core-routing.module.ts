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
      { path: 'empresa', loadChildren: '../cadastros/empresa/empresa.module#EmpresaModule' },
      { path: 'financeiro/lancamento', loadChildren: '../financeiro/lancamento/lancamento.module#LancamentoModule' },
      { path: 'outros/agencia', loadChildren: '../cadastros/outros/agencia/agencia.module#AgenciaModule' },
      { path: 'outros/banco', loadChildren: '../cadastros/outros/banco/banco.module#BancoModule' },
      { path: 'outros/categoria', loadChildren: '../cadastros/outros/categoria/categoria.module#CategoriaModule' },
      { path: 'outros/conta', loadChildren: '../cadastros/outros/conta/conta.module#ContaModule' },
      { path: 'outros/convenio', loadChildren: '../cadastros/outros/convenio/convenio.module#ConvenioModule' },
      { path: 'outros/tipo-lancamento', loadChildren: '../cadastros/outros/tipo-lancamento/tipo-lancamento.module' +
        '#TipoLancamentoModule' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
