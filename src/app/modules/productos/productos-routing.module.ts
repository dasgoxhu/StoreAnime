import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './administracion/lista/lista.component';
import { CrearComponent } from './administracion/crear/crear.component';
import { ImagenesComponent } from './administracion/imagenes/imagenes.component';
import { FormComprarComponent } from './publico/form-comprar/form-comprar.component';

const routes: Routes = [
  {
    path: 'producto-crear',
    component: CrearComponent
  },
  {
    path: 'producto-lista',
    component: ListaComponent
  },
  {
    path: 'producto-imagen/:id',
    component: ImagenesComponent
  },
  {
    path: 'form-comprar',
    component: FormComprarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
