import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'tty-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {
  @Input() isHero = true;
  @Input() slidesStore: any[];
  @Input() customOptions: OwlOptions;
  activeSlides: SlidesOutputData = null;
  customOptionsDefaults: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoHeight: false,
    navSpeed: 1500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      }
    },
    slideTransition: 'linear',
    // nav: true
  };
  constructor() { }

  ngOnInit(): void {
    const custom = this.customOptions;
    const defaults = this.customOptionsDefaults;
    this.customOptions = { ...defaults, ...custom };
  }
  // getData(data: SlidesOutputData) {
  //   this.activeSlides = data;
  //   console.log(this.activeSlides);
  // }

}
