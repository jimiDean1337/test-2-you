import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'tty-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-to-you';
  constructor() { }

  ngOnInit() {
    AOS.init();
  }
}
