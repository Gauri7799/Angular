import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() public name:any=new EventEmitter;
  public AcceptData(value : any)
  {
//    this.name=value;
    this.name.emit(value);
  }
}
