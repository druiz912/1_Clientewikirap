import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discos } from '../models/discos.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SDiscosService {

  listaDiscos: any[] = [];

  discos: Observable<Discos[]> = new Observable();
  
  constructor(private clienteHttp: HttpClient) { }

  getDiscos(): Observable<Discos[]> {
    console.log("Obteniendo discos del WS");
    this.discos = this.clienteHttp.get<Discos[]>("http://localhost:8080/discos");
    return this.discos;
  }

  getUnDisco(i:any) {
    return this.listaDiscos[i];
  }

  save(discos:any):Observable<any>{
    console.log("Guardando..." + discos);
    const body = {};
    const parametros = new HttpParams()
      .append('portada', discos.portada)
      .append('titulo', discos.titulo)
      .append('autor' , discos.autor)
      .append('duracion', discos.duracion)
      .append('fechaSalida', discos.fechaSalida)
    const retorno = this.clienteHttp.post<any>("http://localhost:8080/discos", body, {params:parametros});
    return retorno;
  }
}
