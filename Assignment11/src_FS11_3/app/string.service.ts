import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  CountCapital(  caps:string)
  {
    var i=0;
    var count:number=0;
    for (i=0;i<caps.length;i++)
    {
      if(caps[i]==caps[i].toUpperCase())
      {
          count++;
      }
    }
    return count;
  }
}
