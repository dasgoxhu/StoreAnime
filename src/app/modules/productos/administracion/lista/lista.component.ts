import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/productos.service';
import { ProductoModel } from '../../../../models/producto.model';
import { Router } from '@angular/router';
import { CategoriaModel } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  producto: ProductoModel[];
  idEliminar: ProductoModel;
  pagina: number = 1;
  extCategoriaLista: CategoriaModel[];

  constructor(private service: ProductoService, private router: Router, private ExtCategoria: CategoriaService) {
    
   }

  ngOnInit(): void {
    this.llenarProducto();
  }

  llenarProducto(){
    this.ExtCategoria.mostrarCategorias().subscribe(
      data =>{
         this.extCategoriaLista = data;
         console.log(data + "Categoria ")
         
      },
      error => {
         console.error('error categorias')
      }
    )
    this.service.mostrarProducto().subscribe(
      data => {
         this.producto = data;
      },
      error =>{
        alert('error')
      }
    );
  }

  EliminarProducto(id: ProductoModel){
    this.idEliminar = id;
    this.service.eliminarProducto(this.idEliminar).subscribe(
      data => {
         this.EliminarProducto(id);
         alert('categoria eliminada'); 
      },
      error =>{
        this.llenarProducto();
      }
    );
    }

  }
