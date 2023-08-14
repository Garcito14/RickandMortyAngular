import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(location: any[], texto: string): any {
    console.log("pipepipe");
    texto = texto.toLowerCase()
   console.log( 'pipe'+ location);
   if(texto === ''){
    return location 
   }
 return location.filter(item =>{
  return item.location.name.toLowerCase()
      .includes(texto);
 })
  
  }

}
