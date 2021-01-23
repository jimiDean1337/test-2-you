import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { Observable } from 'rxjs';
import productsJSON from '../../../assets/data/products.json';
import teamJSON from '../../../assets/data/team.json';
import heroSlidesJSON from '../../../assets/data/hero-slides.json';
import testimonialsJSON from '../../../assets/data/testimonials.json';
import pricingJSON from '../../../assets/data/pricing.json';
// import transitionsJSON from '../../../assets/data/transitions.json';

@Component({
  selector: 'tty-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('counterWrap', { static: true }) counterWrap: ElementRef;
  products: any = productsJSON[0].data;
  team: any = teamJSON[0].data;
  heroSlides = heroSlidesJSON[0].data;
  heroSlidesOptions: OwlOptions = heroSlidesJSON[0].carouselOptions;
  testimonials = testimonialsJSON[0].data;
  testimonialOptions: OwlOptions = testimonialsJSON[0].carouselOptions;
  pricing = pricingJSON[0].data;
  // transitionsList: any = transitionsJSON[0];

  consultationForm = {
    firstName: '',
    lastName: '',
    service: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  }

  constructor() { }

  ngOnInit(): void {}
  submitConsultationForm(form: any) {
    console.log(form)
  }

}
