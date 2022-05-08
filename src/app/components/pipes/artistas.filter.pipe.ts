import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArtistas'
})
export class FilterPipeArtistas implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultArtistas = [];
    for(const artista of value){
      if(artista.nombreartistico.indexOf(arg) > -1){
         resultArtistas.push(artista);
      };
    };
    return resultArtistas;
    }

}