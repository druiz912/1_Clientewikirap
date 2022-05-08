import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SDiscosService } from 'app/services/s-discos.service';

@Component({
  selector: 'app-form-nuevo-disco',
  templateUrl: './form-nuevo-disco.component.html',
  styleUrls: ['./form-nuevo-disco.component.css']
})
export class FormNuevoDiscoComponent implements OnInit {
  formulario: FormGroup;
  constructor(private servicioDiscos: SDiscosService, private router: Router) {
    this.formulario = new FormGroup({
      portada: new FormControl("", [Validators.required]),
      titulo: new FormControl("", [Validators.required]),
      autor: new FormControl("", [Validators.required]),
      duracion: new FormControl(),
      fechaSalida: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  crearDisco() {
    if (!this.formulario.invalid) {
      this.servicioDiscos.save(this.formulario.value).subscribe(
        respuesta => {
          this.procesarRespuesta(respuesta);
        }
      )
    }
  }

  procesarRespuesta(respuesta: any) {
    console.log("Insertando...")
    this.formulario.reset();
    this.router.navigate(['listado'])
  }


}
