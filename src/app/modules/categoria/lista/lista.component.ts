import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaModel } from '../../../models/categoria.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  categoria: CategoriaModel[];
  idEliminar: CategoriaModel;
  pagina: number = 1;

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.llenarCategorias();
  }

  llenarCategorias(){
    this.service.mostrarCategorias().subscribe(
      data => {
         this.categoria = data;
      },
      error =>{
        alert('error')
      }
    );
  }

  EliminarCategoria(id: any){
    
    this.idEliminar = id;
    console.log(id + "Identificador categoria")
    this.service.eliminarCategoria(this.idEliminar).subscribe(
      data => {
        console.log(data)
         this.idEliminar;
         this.llenarCategorias();
         alert('categoria eliminada'); 
      },
      error =>{
        alert('error')
      }
    );
    
  }
}
