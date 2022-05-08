import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDiscos'
})
export class FilterPipeDiscos implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultDiscos = [];
    for(const discos of value){
      if(discos.titulo.indexOf(arg) > -1){
         resultDiscos.push(discos);
      };
    };
    return resultDiscos;
    }

}