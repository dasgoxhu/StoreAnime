import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from '../../../services/seguridad.service';
import { ClienteModels } from '../../../models/cliente.model';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})



export class RegistrarseComponent implements OnInit {

  fgValidador: FormGroup;

  constructor(
    private vali: FormBuilder, 
    private service: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.DatosFormulario();
  }

  DatosFormulario(){
    this.fgValidador = this.vali.group({
      nickname: ['', [Validators.required, Validators.minLength(4)]],
      correo: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      ubicacion: ['', [Validators.required, Validators.minLength(8)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  GuardarInfo(){
    if(this.fgValidador.invalid){
      alert("Faltan Datos o Son Incorrectos")
    }else{
      let model = this.getClienteDato();
      this.service.ClienteRegistro(model).subscribe(
        data =>{
          alert("Registro Completado")
          this.router.navigate(['/seguridad/Inicio-Sesion']);
        },
        error =>{
          alert("Error en el Registro")
        });

    }
  }
  getClienteDato(): ClienteModels{
    let model = new ClienteModels()
    model.nickname = this.validar.nickname.value;
    model.correo = this.validar.correo.value;
    model.ubicacion = this.validar.ubicacion.value;
    model.contrasena = this.validar.contrasena.value;
    return model;
  } 
  get validar(){
    return this.fgValidador.controls;
  }

}
