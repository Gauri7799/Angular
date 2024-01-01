import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]',
  standalone: true
})
export class CustomstyleDirective {

  constructor(private obj:ElementRef) {
    this.obj.nativeElement.style.background='yellow';
   }

}
