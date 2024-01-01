import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  transform(value1: number, value2:number):number {
    let mult:number=0;
    mult=value1*value2
    return mult;
  }

}
