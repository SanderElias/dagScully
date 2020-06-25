import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {ScullyRoutesService, TransferStateService} from '@scullyio/ng-lib';
import {combineLatest, Subject} from 'rxjs';
import {map, tap, window, filter, distinctUntilChanged, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styles: [''],
})
export class DocsComponent implements OnInit {

  docPages$ = this.srs.available$.pipe(
    /** only the english docs pages please */
    map((routes) => routes.filter((r) => r.route.startsWith('/docs/') && r.lang && r.lang === 'en'))
  );

  current$ = combineLatest([
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd || e instanceof NavigationStart),
      map((ev: NavigationEnd) => ev.urlAfterRedirects || ev.url),
      startWith(location?.pathname || ''),
      distinctUntilChanged()
    ),
    this.docPages$,
  ]).pipe(
    map(([cur, routes]) => routes.findIndex((r) => r.route === cur)),
  );

  next$ = combineLatest([this.docPages$, this.current$]).pipe(
    map(([routes, cur]) => {
      if (!cur || cur <= 0) {
        return routes[0];
      }
      if (cur >= routes.length) {
        return routes[0];
      }
      return routes[cur + 1];
    }),
  );

  prev$ = combineLatest([this.docPages$, this.current$]).pipe(
    map(([routes, cur]) => {
      if (!cur || cur <= 0) {
        return routes[routes.length-1];
      }
      if (cur >= routes.length) {
        return routes[0];
      }
      return routes[cur-1 <= 0 ? routes.length - 1 : cur - 1];
    }),
  );

  constructor(
    private srs: ScullyRoutesService,
    private tss: TransferStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prev$.subscribe(console.log);
  }
}
