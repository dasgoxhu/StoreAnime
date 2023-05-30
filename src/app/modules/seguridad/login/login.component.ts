import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { UsuarioModel } from '../../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Validador: FormGroup;

  constructor(
    private val: FormBuilder, 
    private service2: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.DatosFormulario();
  }

  DatosFormulario(){
    this.Validador = this.val.group({
      correo: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    })
  }
  
  LoginValidador(){
    if(this.Validador.invalid){
      alert("Faltan Datos o Son Incorrectos" )
    }else{
      let modelo = this.getLoginDato();
      
      this.service2.ClienteLogin(modelo).subscribe(
          data =>{
          if(data != null)
        {
          this.service2.GuardarSesion(data); 
          alert("Bienvenido")
          this.router.navigate(['/inicio']);
        }
        else
        {
          alert("Datos erroneos")
        }

        })
    }
  }

  getLoginDato(): UsuarioModel{
    let modelo = new UsuarioModel()
    modelo.correo = this.validar.correo.value;
    modelo.contrasena = this.validar.contrasena.value;
    
    return modelo;
  } 
  get validar(){
    return this.Validador.controls;
  }
}
