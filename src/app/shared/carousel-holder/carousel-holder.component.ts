import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'tty-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent implements OnInit {
  @Input() data: any;
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    // autoplay: true,
    autoHeight: false,
    navSpeed: 1200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        animateIn: '',
        animateOut: ''
      }
    },
    slideTransition: 'linear',
    // nav: true
  }
  activeSlides: SlidesOutputData = null;

  slidesStore: any[] = [
    {
      id: 0,
      src: '../assets/images/bg_1.jpg',
      headline: `<h1 class="mb-4">For Groups<span>and Individuals</span></h1>
              <h3 class="subheading">Safe & accurate COVID-19 testing, wherever you choose, whenever you choose.</h3>`,
      action: 'Learn more'
    },
    {
      id: 1,
      src: '../assets/images/bg_2.jpg',
      headline: `<h1 class="mb-4">Convenient<span>COVID-19 testing</span></h1>
              <h3 class="subheading">Get tested at home, school or work, by a highly trained testing professional.</h3>`,
      action: 'Make an appointment'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  getData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

}
