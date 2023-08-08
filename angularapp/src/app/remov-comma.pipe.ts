import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removComma'
})
export class RemovCommaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
