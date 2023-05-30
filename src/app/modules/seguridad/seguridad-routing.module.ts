import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {
    path: 'Inicio-sesion',
    component: LoginComponent
  },
  {
    path: 'cerrar-sesion',
    component: LogoutComponent
  },
  {
    path:'nuevo-usuario',
    component: RegistrarseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
