import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompsucess]',
  standalone: true
})
export class CompsucessDirective {


  constructor(private obj:ElementRef) { 

  }
  @HostListener('mouseenter')onmouseenter()
  {
    this.obj.nativeElement.style.color='green';
  }
  @HostListener('mouseleave')onmouseleave()
  {
    this.obj.nativeElement.style.color='black';
  }

}
