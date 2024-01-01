import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FS8_4';
public name:string="";
  public Senddata(value:any)
  {
    this.name=value;
  }
}
