import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(location: any[], texto: string): any[] {
   console.log(location);
   return location
  }

}
