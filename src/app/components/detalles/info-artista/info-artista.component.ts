import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artistas } from 'app/models/artistas.model';

@Component({
  selector: 'app-info-artista',
  templateUrl: './info-artista.component.html',
  styleUrls: ['./info-artista.component.css']
})
export class InfoArtistaComponent implements OnInit {
  
  @Input() artistas: Artistas = new Artistas(0, "", "", "", "", "", "", "", "");
  
  artistasId: number = 0;


  constructor(private activatedRouted: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      console.log(params)
      //this.artistasId = params.;
    })
  }

}
