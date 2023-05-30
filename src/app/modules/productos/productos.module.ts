import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { CrearComponent } from './administracion/crear/crear.component';
import { ListaComponent } from './administracion/lista/lista.component';
import { ProductosInicioComponent } from './publico/productos-inicio/productos-inicio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ImagenesComponent } from './administracion/imagenes/imagenes.component';
import { FormComprarComponent } from './publico/form-comprar/form-comprar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListaComponent,
    ProductosInicioComponent,
    ImagenesComponent,
    FormComprarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProductosInicioComponent
  ]
})
export class ProductosModule { }
