import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'tty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('loader', { static: true }) loader: any;
  menuOpen = false;
  activeLink: BehaviorSubject<number>;
  links = [
    {
      name: 'home',
      url: '/'
    },
    {
      name: 'scheduling',
      url: '/scheduling'
    },
    {
      name: 'about',
      url: '/about'
    },
    {
      name: 'contact',
      url: '/contact'
    },
    {
      name: 'testing',
      url: '/testing'
    },
    {
      name: 'pricing',
      url: '/pricing'
    },
    {
      name: 'blog',
      url: '/blog'
    },
    {
      name: 'COVID-19',
      url: '/response'
    },
  ]
  constructor() {
    this.activeLink = new BehaviorSubject(0);
  }
  closeMenu() {
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  toggleActive(idx: number) {
    this.activeLink.next(idx)
  }
  ngOnInit(): void {
  }

}
