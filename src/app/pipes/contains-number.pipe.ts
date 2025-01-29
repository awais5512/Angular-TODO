import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containsNumber',
})
export class ContainsNumberPipe implements PipeTransform {
  transform(value: string): boolean {
    return /\d/.test(value);
  }
}
