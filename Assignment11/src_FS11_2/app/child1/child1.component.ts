import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers:[NumberService]
})
export class Child1Component {

   chkp:number;
   no1:number=99;
   prime:string;
  constructor(private obj:NumberService)
  {
   this.chkp= this.obj.Chkprime(this.no1);
   if(this.chkp==1)
   {
    this.prime= "Its Prime";
   }
   else
   {
    this.prime= "Not Prime";
   }
  }
}
