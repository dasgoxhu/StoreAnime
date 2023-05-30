import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductoService } from '../../../../services/productos.service';
import { Router } from '@angular/router';
import { ProductoModel } from '../../../../models/producto.model';
import { CategoriaService } from '../../../../services/categoria.service';
import { CategoriaModel } from '../../../../models/categoria.model';

declare const Iseleccionar: any;

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidador: FormGroup;
  extCategoriaLista: CategoriaModel[];

  constructor(
    private vali: FormBuilder, 
    private ExtCategoria: CategoriaService,
    private service: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.DatosFormulario();
    this.mostrarCategoria();
    Iseleccionar();
  }
  
  mostrarCategoria(){
    this.ExtCategoria.mostrarCategorias().subscribe(
      data =>{
         this.extCategoriaLista = data;
         console.log(data + "Categoria ")
         setTimeout(Iseleccionar(), 500);
      },
      error => {
         console.error('error categorias')
      }
    )
  }
  

  DatosFormulario(){
    this.fgValidador = this.vali.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      precio: ['', [Validators.required, Validators.minLength(5)]], 
      categoriaid: ['', [Validators.required]]
    })
  }

  GuardarProducto(){
    if(this.fgValidador.invalid){
      alert("Faltan Datos o Son Incorrectos")
    }else{
      let model = this.getClienteDato();
      this.service.guardarProducto(model).subscribe(
        data =>{
          alert("Producto guardado")
          this.router.navigate(['/productos/producto-lista']);
        },
        error =>{
          
          alert("Error en el Registro")
        });

    }
  }
  getClienteDato(): ProductoModel{
    let model = new ProductoModel()
    model.nombre = this.validar.nombre.value;
    model.precio = this.validar.precio.value;
    model.categoriaid = this.validar.categoriaid.value;
    return model;
  } 
  get validar(){
    return this.fgValidador.controls;
  }
}
