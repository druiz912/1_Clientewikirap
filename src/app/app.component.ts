import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WIKIRAP';

  @Input() textoAbuscar: string = '';

  buscar(textoAbuscar: any): void {
    console.log('Aviso saliendo de app.ts  ' + textoAbuscar);
    this.textoAbuscar = textoAbuscar;
  }
}
