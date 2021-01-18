import { Component, Input, OnInit } from '@angular/core';
export interface Options {
  backgroundImage?: string;
  backgroundColor?: string;
  headline?: string;
  text?: string;
  cta?: string;
}
@Component({
  selector: 'tty-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  @Input() options: Options = {
    backgroundImage: 'bg_3.jpg',
    backgroundColor: '',
    headline: 'We Provide Consierge COVID-19 Testing',
    text: 'Your Health is Our Top Priority. Get a test TODAY!',
    cta: 'Learn more'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
