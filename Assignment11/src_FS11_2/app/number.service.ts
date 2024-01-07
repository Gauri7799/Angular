import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  Chkprime( n:number):number 
  {
    var i=0;
    var flag:number=1;
    if(n==0 || n==1)
      {
        flag=0;
        return flag; //Not Prime
      }
      else{
        for(i=2;i<n/2;i++)
        {
          
           if(n%i==0)
          {
            flag=0;   //Not Prime
            break;
           }
         
        }
      }
    return flag;
  }
  
}
