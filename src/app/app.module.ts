import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdefectoComponent } from './public/inicio/pdefecto/pdefecto.component';
import { BsuperiorComponent } from './public/mpage/bsuperior/bsuperior.component';
import { MenuComponent } from './public/mpage/menu/menu.component';
import { BinferiorComponent } from './public/mpage/binferior/binferior.component';
import { HttpClientModule } from '@angular/common/http'
import { ProductoModel } from './models/producto.model';
import { ProductosModule } from './modules/productos/productos.module';

@NgModule({
  declarations: [
    AppComponent,
    PdefectoComponent,
    BsuperiorComponent,
    MenuComponent,
    BinferiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
