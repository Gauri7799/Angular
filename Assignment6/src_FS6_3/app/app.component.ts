import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<h1>"Inline html/css"</h1><input type="text">',
  styles: 'h1{color:blue}input{color:aqua};'
})
export class AppComponent {
  title = 'FS6_3';
}
