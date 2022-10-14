import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective implements OnInit {

  @Input() appColorBorder: string;

  count!: number;

  color!: string;

  day = 60 * 60 * 24 * 1000;

  week = 7;

  month = 30;

  halfYear = 6 * 30;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {

    this.count = Math.trunc((Date.now() - Date.parse(this.appColorBorder)) / this.day);

    if (this.count < this.week) {
      this.color = '5px solid blue';
    } else if (this.count < this.month) {
      this.color = '5px solid green';
    } else if (this.count < this.halfYear) {
      this.color = '5px solid yellow';
    } else {
      this.color = '5px solid red';
    }

    this.el.nativeElement.style.borderBottom = this.color;

  }
}
