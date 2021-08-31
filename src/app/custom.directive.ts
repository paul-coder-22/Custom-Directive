import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  exportAs: 'appCustom'
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

  highlight(color: string) {
    console.log(color);
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input('appCustom') highlightColor = '';
  @Input() defaultColor = '';

  @Input() color: any;
  @HostListener('mouseenter') onMouseEnterdiv() {
    // this.highlight('red');
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeavediv() {
    this.highlight('');
  }
}
