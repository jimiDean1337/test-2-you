import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationError, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
      filter(evt => evt instanceof NavigationStart)
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
              window.scrollTo(0, 0);
            });
          obs.next(false);
        }, 1000);
      } else {
        setTimeout(() => {
          obs.next(false);
        }, 1000);
      }
    });
    window.scrollTo(0, 0);
    return false;
  }

  ngOnInit(): void {
    this.navStart.subscribe(obs => {
      console.log(obs);
      this.load();
    })
  }

}
