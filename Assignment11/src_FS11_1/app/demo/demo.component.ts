import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent {
public result1:number=0;
public result2:number=0;
public a1:number=17;
public a2:number=10;

  constructor(private obj:ArithmeticService)
  {
    this.result1=this.obj.Add(this.a1,this.a2);
    this.result2=this.obj.Sub(this.a1,this.a2);

  }

}
