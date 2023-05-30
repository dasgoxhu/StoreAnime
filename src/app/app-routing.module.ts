import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdefectoComponent } from './public/inicio/pdefecto/pdefecto.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/inicio',
  },
  {
    path: 'inicio',
    component: PdefectoComponent
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modules/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./modules/categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./modules/seguridad/registrarse/registrarse.component').then(m => m.RegistrarseComponent)
  },
  {
    path: 'productos',
    loadChildren: () => import('./modules/productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: '/inicio'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
