import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../../../models/producto.model';
import { ProductoService } from '../../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-inicio',
  templateUrl: './productos-inicio.component.html',
  styleUrls: ['./productos-inicio.component.css']
})
export class ProductosInicioComponent implements OnInit {

  ListaProductos: ProductoModel[];

  constructor(private service: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  getProductos(){
    this.service.mostrarProducto().subscribe(
      data => {
        this.ListaProductos = data;
      },
      error =>{
        alert("error")
      }
    )
  }

  detalles(id: any){
    this.router.navigate([`/productos/producto-detalles/${id}`]);
  }
}
