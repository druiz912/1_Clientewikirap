import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discos } from 'app/models/discos.model';
import { SDiscosService } from 'app/services/s-discos.service';

@Component({
  selector: 'app-info-discos',
  templateUrl: './info-discos.component.html',
  styleUrls: ['./info-discos.component.css']
})
export class InfoDiscosComponent implements OnInit {

  allDiscos: Discos[] = new Array<Discos>();

  @Input() discos: Discos[] = new Array<Discos>();

  discoId: number = 0;

  constructor( private servicioDiscos: SDiscosService,
    private ruta: ActivatedRoute,
  ) { 
    this.ruta.params.subscribe(par => {
      console.log("***************"+par['id']);
    })
  }

  ngOnInit(): void {

  }
}
