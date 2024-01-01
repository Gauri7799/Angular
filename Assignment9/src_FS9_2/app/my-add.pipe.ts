import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(value1: number, value2:number):number {
    let sum:number=0;
    sum=value1+value2
    return sum;
  }

}
