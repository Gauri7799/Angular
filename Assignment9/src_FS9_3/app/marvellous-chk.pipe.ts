import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {
public state:string="";
  transform(value:number,param:string):string {
    if(param=="Even")
    {
      this.state= value%2==0?"It is Even":"It is Odd";
    }
    if(param=="Prime")
    {
      var flag:number=0;
      for(var i=0;i<=value/2;i++)
      {
        if(value == 0 || value == 1)
       {
        this.state= "It is not Prime";
        }
      for (i=2;i<value/2;i++)
      {
        if(value%i==0)
        {
            flag=1;
            break;
        }
      }
      if(flag==1)
      {
       this.state= "It is not Prime";
      }
      else{
        this.state= "It is Prime";
      }
    }
      
    }
    if(param=="Perfect")
    {
      if(value>0 && Math.sqrt(value)%1==0)
      {
        this.state= "It is perfect";
      }
      this.state= "It is not perfect";

    }
    return this.state;
  }

}
