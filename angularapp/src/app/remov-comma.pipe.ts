import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removComma'
})
export class RemoveCommaPipe implements PipeTransform {

  transform(value: any): any {
    if (value !== undefined && value !== null) {
      return value.replace(/,/g, "");
    } else {
      return "";
    }
  }
}

