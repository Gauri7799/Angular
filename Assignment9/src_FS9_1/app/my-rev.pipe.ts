import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
    let temp:string="";
     var name="Marvellous"
    for(var i=name.length-1;i>=0;i--)
    {
      temp+=name[i];
    }
    return temp;
  }

}
