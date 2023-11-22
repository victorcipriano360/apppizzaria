import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'pagamento',
        loadChildren: () => import('../pagamento/pagamento.module').then(m => m.PagamentoPageModule)
      },
      {
        path: '',
        redirectTo: 'login', // Redireciona para a página de login
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login', // Rota para a página de login
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/login', // Redirecionamento para a página de login caso a rota principal seja acessada
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
