import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImagenModels } from 'src/app/models/imagenes.models';
import { ImagenespService } from '../../../../services/imagenesp.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  fgValidador: FormGroup;
  productoid: string;
  listaImagenes: ImagenModels[];

  constructor(private fm: FormBuilder, private route: ActivatedRoute, private service:ImagenespService) { }

  ngOnInit(): void {
    this.DatosFormulario();
    this.productoid = this.route.snapshot.params["id"];
    this.fgv.productoid.setValue(this.productoid);
    this.getImagenesProductoid();
  }

  getImagenesProductoid(){
    this.service.mostrarImagen(this.productoid).subscribe(
      data => {
        this.listaImagenes = data;
      },
      error => {
        alert("error");
      }
    );
  }

  eliminarImagen(id: any){
    this.service.eliminarImagen(id).subscribe(
      data => {
        alert("imagen eliminada");
        this.getImagenesProductoid();
      },
      error => {
        alert("error al eliminar");
      }
    );
  }

  DatosFormulario(){
    this.fgValidador = this.fm.group({
      archivo: ['', [Validators.required]],
      orden: ['', [Validators.required]], 
      productoid: ['', [Validators.required]]
    })
  }

  subirImagen(){
    if(this.fgValidador.invalid){
       alert("invalido");
    }else{
      const formData = new FormData();
      formData.append('archivo', this.fgv.archivo.value);
      this.service.guardarImagen(formData , this.fgv.orden.value , this.fgv.productoid.value).subscribe(
        data => {
          this.fgv.archivo.setValue(data.filename);
        },
        error => {
          alert("error");
        }
      )
    }
  }

  onFileSelect(event: any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.fgv.archivo.setValue(file);
    }
  }

  get fgv(){
    return this.fgValidador.controls;
  }

}
