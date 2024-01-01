import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Input() public fromparent:any;
 @Output() public toparent:any=new EventEmitter;
 senddate()
 {
  this.toparent.emit("Hello from child");

 }
}
