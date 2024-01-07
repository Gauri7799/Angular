import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }
public Add( a:number, b:number):number
{
   
   var Sum:number=0;
  Sum=a+b ;
  return Sum;

}
 
public Sub(a:number, b:number):number
{
   
   var Sum:number=0;
  Sum=a-b ;
return Sum;
}
}
