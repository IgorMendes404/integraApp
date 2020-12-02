import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listar',
    loadChildren: () => import('./categorias/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./categorias/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'alterar',
    loadChildren: () => import('./categorias/alterar/alterar.module').then( m => m.AlterarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
