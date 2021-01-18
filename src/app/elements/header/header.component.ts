import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tty-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('loader', { static: true }) loader: any;
  menuOpen = false;
  constructor() {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {
  }

}
