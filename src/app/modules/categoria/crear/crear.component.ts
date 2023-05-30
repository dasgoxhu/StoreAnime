import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { Router } from '@angular/router';
import { CategoriaModel } from '../../../models/categoria.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidador: FormGroup;

  constructor(
    private vali: FormBuilder, 
    private service: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.DatosFormulario();
  }

  DatosFormulario(){
    this.fgValidador = this.vali.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  GuardarCategoria(){
    if(this.fgValidador.invalid){
      alert("Faltan Datos o Son Incorrectos")
    }else{
      let model = this.getClienteDato();
      
      this.service.guardarCategoria(model).subscribe(
        data =>{
          alert("categoria guardada")
          this.router.navigate(['/categoria/categoria-lista']);
        },
        error =>{
          alert("Error en el Registro")
        });

    }
  }
  getClienteDato(): CategoriaModel{
    let model = new CategoriaModel()
    model.nombre = this.validar.nombre.value;
    console.log(this.validar.nombre + "nombre");
    return model;
  } 
  get validar(){
    return this.fgValidador.controls;
  }
}
