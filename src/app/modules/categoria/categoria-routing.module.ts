import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from '../categoria/lista/lista.component';
import { CrearComponent } from '../categoria/crear/crear.component';

const routes: Routes = [
  {
    path: 'categoria-crear',
    component: CrearComponent
  },
  {
    path: 'categoria-lista',
    component: ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
