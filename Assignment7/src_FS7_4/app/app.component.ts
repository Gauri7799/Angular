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
  title = 'FS7_4';
  public Name:string="";
  public upper()
  {
    this.Name="clicked"?"UPPER BUTTON CLICKED":"NOT CLICKED";
  }
  public lower()
  {
    this.Name="clicked"?"lower button clicked":"not clicked";
  }
}
