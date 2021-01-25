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
  customOptionsDefaults: OwlOptions = {};
  constructor() { }

  ngOnInit(): void {}
  // getData(data: SlidesOutputData) {
  //   this.activeSlides = data;
  //   console.log(this.activeSlides);
  // }

}
