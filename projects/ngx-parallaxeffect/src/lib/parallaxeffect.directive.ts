import { Directive, ElementRef, HostListener, Input } from '@angular/core'
// import {ScrollingModule} from '@angular/cdk/scrolling'

@Directive({
  selector: '[parallaxeffect]',
  standalone: true
})
export class ParallaxeffectDirective {
  @Input() parallaxeffect: string = '0'
  
  elRef: ElementRef
  pageYOffset = 0
  
  constructor(elRef: ElementRef) {
    this.elRef = elRef
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    let pageYOffset = window.pageYOffset
    if (this.parallaxeffect) {
      this.elRef.nativeElement.style.transform = 'translate3d(0px, ' + pageYOffset * parseFloat(this.parallaxeffect) + 'px, 0px)'
    }
  }

}
