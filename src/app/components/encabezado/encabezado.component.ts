import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SArtistasService } from 'app/services/s-artistas.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  buscarTexto: string = '';

  @Output() busquedaEvent: EventEmitter<string> = new EventEmitter<string>();
  

  constructor(private artistasService:SArtistasService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.busquedaEvent.emit(this.buscarTexto);
  }
}
