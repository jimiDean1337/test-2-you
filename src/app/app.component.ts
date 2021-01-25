import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'tty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-2-you';
  constructor() {
  }

  ngOnInit() {
    AOS.init({
      useClassNames: true,
      once: true
    });
  }

  scrollToTop() {
    return window.scrollTo(0, 0);
  }
}
