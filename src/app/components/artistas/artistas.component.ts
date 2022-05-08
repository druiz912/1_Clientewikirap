import { Component, Input, OnInit } from '@angular/core';
import { Artistas } from 'app/models/artistas.model';



@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  @Input() artistas:Artistas = new Artistas(0,"" ,"","","","","","","" );
  constructor() { }

  ngOnInit(): void {
  }

}
