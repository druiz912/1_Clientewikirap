import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SArtistasService } from 'app/services/s-artistas.service';


@Component({
  selector: 'app-form-nuevo-artista',
  templateUrl: './form-nuevo-artistas.component.html',
  styleUrls: ['./form-nuevo-artistas.component.css']
})
export class FormularioNuevoArtistaComponent implements OnInit {
  formulario: FormGroup;//Variable que va a contener la información del formulario
  constructor(private servicioArtistas:SArtistasService, private router:Router) { 
    this.formulario = new FormGroup({
      nombreartistico: new FormControl("", [Validators.required]),
      nombrenacimiento: new FormControl(),
      imagen: new FormControl("", [Validators.required]),
      fechanacimiento: new FormControl(),
      edad: new FormControl(),
      sexo: new FormControl(),
      nacionalidad: new FormControl(),
      detalles: new FormControl()
    })

  }

  ngOnInit(): void {
  }

  crearArtista(){
    if (!this.formulario.invalid){
      this.servicioArtistas.save(this.formulario.value).subscribe(
        respuesta => {
          this.procesarRespuesta(respuesta);
        })
    }
  }
  procesarRespuesta(respuesta:any){
    console.log("Insertado...");
    //this.formulario.controls["nombre"].setValue("");
    this.formulario.reset();
    this.router.navigate(['listado']);
  }

}
