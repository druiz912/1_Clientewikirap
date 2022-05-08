import { Component, Input, OnInit } from '@angular/core';
import { Artistas } from 'app/models/artistas.model';
import { Discos } from 'app/models/discos.model';
import { SArtistasService } from 'app/services/s-artistas.service';
import { SDiscosService } from 'app/services/s-discos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allArtistas: Artistas[] = new Array<Artistas>();
  @Input() artistas: Artistas[] = new Array<Artistas>();

  allDiscos: Discos[] = new Array<Discos>();
  @Input() discos: Discos[] = new Array<Discos>();

  imgSel: any //bucle de imagenes
  // Para ngIf
  most: boolean
  mostElem: boolean
  constructor(private servicioArtistas: SArtistasService,
    private servicioDiscos: SDiscosService) { 
    this.imgSel = '0' // inicio del bucle
    this.most = true; //  mostrar
    this.mostElem = true; //mostrar 1
  }

  ngOnInit(): void {
    this.servicioArtistas.getArtistas().subscribe(
      Artistas => {
        this.artistas = Artistas; 
      })
    
    this.servicioDiscos.getDiscos().subscribe(
      Discos => {
      this.discos = Discos;
      })
    
    setInterval(() => { //bucle de imágenes header
      if (this.imgSel === '0') {
        this.imgSel = '1';
      } else if (this.imgSel === '1') {
        this.imgSel = '2';
      } else if (this.imgSel === '2') {
        this.imgSel = '3';
      } else if (this.imgSel === '3') {
        this.imgSel = '0'
      }

    }, 3000)
  }


  onCMostrar() {
    this.most = !this.most;
  }
  
  onCMostrarElem() {
    this.mostElem = !this.mostElem;
  }

}
