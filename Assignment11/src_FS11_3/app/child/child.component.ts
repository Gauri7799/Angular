import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent {

  chkp:number;
  no1:number=7;
  prime:string;


  count:number;
   Caps:string="sdghGftyFgvjhTUYGBH";


 constructor(private obj1:NumberService,private obj2:StringService)
 {
  this.chkp= this.obj1.Chkprime(this.no1);
  if(this.chkp==1)
  {
   this.prime= "Its Prime";
  }
  else
  {
   this.prime= "Not Prime";
  }


  this.count=this.obj2.CountCapital(this.Caps);
 }

}
