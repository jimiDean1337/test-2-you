import { Component, Input, OnInit } from '@angular/core';
import { HeroConfig } from './hero.interface';


@Component({
  selector: 'tty-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() config: HeroConfig;
  heroConfigDefaults: HeroConfig = {
    imgSrc: 'bg_1.jpg',
    parallaxConfig: {
      initialValue: -100,
      ratio: .5
    }
  }
  constructor() { }

  ngOnInit(): void {
    const config = {
      ...this.heroConfigDefaults,
      ...this.config,
    };
    this.config = config;
  }

}
