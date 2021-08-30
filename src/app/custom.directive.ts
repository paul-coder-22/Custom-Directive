import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input('appCustom') highlightColor = '';
  @Input() defaultColor = '';
}
