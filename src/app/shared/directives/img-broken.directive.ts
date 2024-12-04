import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    elNative.src = 'https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png';
  }
  constructor(private elHost: ElementRef) {

  }

}
