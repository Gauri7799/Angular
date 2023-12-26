import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FS7_3';
  public flag:string="";
  public fun()
  {
   /* if("clicked")
    {
      console.log("button is clicked");
    }
    else
    {
      console.log("button is not clicked");
    }*/
    this.flag="clicked"?"yes":"no";
    console.log(this.flag);
  }
}
