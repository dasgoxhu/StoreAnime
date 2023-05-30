import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './categoria-routing.module';
import { CrearComponent } from '../categoria/crear/crear.component';
import { ListaComponent } from '../categoria/lista/lista.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CrearComponent,
    ListaComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriaModule { }
