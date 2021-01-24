import { Component, OnInit } from '@angular/core';
import { Options } from 'src/app/shared/divider/divider.interface';
import { HeroConfig } from 'src/app/shared/hero/hero.interface';

@Component({
  selector: 'tty-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  heroConfig: HeroConfig = {
    imgSrc: 'bg_1.jpg',
    title: 'About Us',
    parallaxConfig: {
      initialValue: 300,
      ratio: 0.1
    },
    breadcrumbs: [
      {
        name: 'Home',
        link: 'home',
      },
      {
        name: 'About',
        link: 'about'
      }
    ]
  }

  dividerOptions: Options = {
    backgroundImage: 'bg_3.jpg',
    headline: 'We provide Free COVID-19 Testing Consultations',
    text: 'Your Health is Our Top Priority with Comprehensive, Affordable medical.',
    cta: 'Free Consultation',
    link: '/contact'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
