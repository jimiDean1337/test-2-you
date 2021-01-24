import { Component, Input, OnInit } from '@angular/core';
import { Options } from './divider.interface';

@Component({
  selector: 'tty-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() options: Options;

  defaultOptions: Options = {
    backgroundImage: 'bg_3.jpg',
    backgroundColor: '',
    headline: 'We Provide Consierge COVID-19 Testing',
    text: 'Your Health is Our Top Priority. Get a test TODAY!',
    cta: 'Learn more',
    link: 'testing'
  };
  constructor() { }

  ngOnInit(): void {
    const options = {
      ...this.defaultOptions,
      ...this.options,
    }
    this.options = options;
  }

}
