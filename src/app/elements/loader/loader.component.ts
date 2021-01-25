import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationError, NavigationStart } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'tty-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading: Observable<boolean>;
  navStart: Observable<NavigationStart>;
  navAuthError: Observable<NavigationError>;
  activeLink: BehaviorSubject<number>;
  constructor(private router: Router, public route: ActivatedRoute) {
    // this.activeLink = new BehaviorSubject(null);
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart),
      tap(() => this.load())
    ) as Observable<NavigationStart>;
    this.navAuthError = router.events.pipe(
      filter(evt => evt instanceof NavigationError)
    ) as Observable<NavigationError>;
  }

  load(url = null) {
    this.loading = new Observable(obs => {
      obs.next(true);
      if (url) {
        setTimeout(() => {
          this.scrollToTop();
          this.router
            .navigate([url], {
              relativeTo: this.route
            });
          obs.next(false);
        }, 1250);
      } else {
        setTimeout(() => {
          this.scrollToTop();
          obs.next(false);
        }, 1250);
      }
    });
    return false;
  }

  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth'});
    const header = document.querySelector('.navbar-collapse');
    const headerNav = document.querySelector('.tty-navbar-light');
    headerNav.classList.remove('collapse')
    header.classList.remove('scrolled');
  }

  ngOnInit(): void {
    this.navStart.subscribe();
  }

}
