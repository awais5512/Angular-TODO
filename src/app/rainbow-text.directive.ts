import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbowText]',
  standalone: false,
})
export class RainbowTextDirective {
  private colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];
  private index = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    setInterval(() => {
      this.renderer.setStyle(
        this.el.nativeElement,
        'color',
        this.colors[this.index]
      );
      this.index = (this.index + 1) % this.colors.length;
    }, 1000);
  }
}
