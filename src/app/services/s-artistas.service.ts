import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artistas } from '../models/artistas.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SArtistasService {

  listArtistas: any[] = [];

  artistas: Observable<Artistas[]> = new Observable();
  
  constructor(private clienteHttp: HttpClient) { }
  getArtistas(): Observable<Artistas[]> {
    console.log("Obteniendo artistas del WS");
    this.artistas = this.clienteHttp.get<Artistas[]>("http://localhost:8080/artistas");
    return this.artistas;
  }

  save(artistas:any):Observable<any>{
    console.log("Guardando..." + artistas);
    const body = {};
    const parametros = new HttpParams()
      .append('nombreartistico', artistas.nombreartistico)
      .append('nombrenacimiento', artistas.nombrenacimiento)
      .append('imagen' , artistas.imagen)
      .append('fechanacimiento', artistas.fechanacimiento)
      .append('edad', artistas.edad)
      .append('sexo', artistas.sexo)
      .append('nacionalidad', artistas.nacionalidad)
      .append('detalles', artistas.detalles)
    const retorno = this.clienteHttp.post<any>("http://localhost:8080/artistas", body, {params:parametros});
    return retorno;
  }
}
