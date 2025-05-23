import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaCor'
})
export class CategoriaCorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
