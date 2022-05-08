import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discos } from 'app/models/discos.model';
import { SDiscosService } from 'app/services/s-discos.service';



@Component({
  selector: 'app-listado-discos',
  templateUrl: './listado-discos.component.html',
  styleUrls: ['./listado-discos.component.css']
})
export class ListadoDiscosComponent implements OnInit {

  allDiscos: Discos[] = new Array<Discos>();

  @Input() discos: Discos[] = new Array<Discos>();
  
  @Input() cadenaAbuscar: string = '';
  
  filtroBusqueda = '';

  constructor(private servicioDiscos: SDiscosService,
    private activateRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.servicioDiscos.getDiscos().subscribe(
      datos => {
        this.discos = datos;
      })
  }

  ngOnChanges(): void { // Le damos los nombres para que pueda buscar 
    this.discos = this.allDiscos.filter(discos => discos.titulo.toUpperCase().includes(this.cadenaAbuscar.toUpperCase()));
  }
}
