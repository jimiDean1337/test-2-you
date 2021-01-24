import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationError, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
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
  constructor(private router: Router, public route: ActivatedRoute) {
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
          this.router
            .navigate([url], {
              relativeTo: this.route
            })
            .then(() => {
              this.scrollToTop();
            });
          obs.next(false);
        }, 750);
      } else {
        setTimeout(() => {
          obs.next(false);
          this.scrollToTop();
        }, 750);
      }
    });
    return false;
  }

  scrollToTop() {
    const header = document.querySelector('.tty-navbar-light');
    header.classList.remove('scrolled');
    window.scroll({ top: 0, behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.navStart.subscribe();
  }

}
