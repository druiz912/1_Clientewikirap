import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Artistas } from 'app/models/artistas.model';
import { SArtistasService } from 'app/services/s-artistas.service';
import { FilterPipeArtistas } from '../pipes/artistas.filter.pipe';


@Component({
  selector: 'app-listado-artistas',
  templateUrl: './listado-artistas.component.html',
  styleUrls: ['./listado-artistas.component.css']
})
export class ListadoArtistasComponent implements OnInit {

  allArtistas: Artistas[] = new Array<Artistas>();

  @Input() artistas: Artistas[] = new Array<Artistas>();
  
  @Input() cadenaAbuscar: string = '';

  @Input() buscarArtista: string = '';

  filtroBusqueda = '';

  @Output() busquedaEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private servicioArtistas:SArtistasService) { 
  }

  ngOnInit(): void {
    this.servicioArtistas.getArtistas().subscribe(
      datosArtistas => {
        this.artistas = datosArtistas;
      })
  }

  buscar(): void {
    this.busquedaEvent.emit(this.buscarArtista);
    console.log(this.busquedaEvent)
    console.log(this.buscarArtista)
  }

  ngOnChanges(): void { // Le damos los nombres para que pueda buscar 
    this.artistas = this.allArtistas.filter(artistas => artistas.nombreartistico.toUpperCase().includes(this.buscarArtista.toUpperCase()));
  }

 
}
