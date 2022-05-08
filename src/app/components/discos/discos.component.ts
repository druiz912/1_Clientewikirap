import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discos } from 'app/models/discos.model';
import { SDiscosService } from 'app/services/s-discos.service';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {

  id: any = ''

  //allDiscos: Discos[] = new Array<Discos>();
  
  @Input() discos:Discos = new Discos(0,"" ,"","","","" );

  constructor(private servicioDiscos: SDiscosService,
    private route: ActivatedRoute) {
    /*
    this.route.params.subscribe(
      params => {
        console.log(params['id']);
        console.log(this.servicioDiscos.getUnDisco(params['id']));
        this.discos = (this.servicioDiscos.getUnDisco(params['id']));
        this.id = params['id'];
      }
    )*/
    }

  ngOnInit(): void {

  }



}
