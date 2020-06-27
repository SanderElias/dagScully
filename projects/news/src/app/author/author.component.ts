import {HttpClient} from '@angular/common/http';
import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EMPTY, merge, ReplaySubject, timer} from 'rxjs';
import {filter, map, switchMap, take, pluck, tap} from 'rxjs/operators';
import {Authors} from '../authors/Authors.interface';
import {TransferStateService} from '@scullyio/ng-lib';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [],
})
export class AuthorComponent implements OnInit {
  private id$ = new ReplaySubject<number>(1);
  author$ = this.id$.pipe(
    switchMap((id) =>
      this.tss.useScullyTransferState(
        'author',
        this.http
          .get<Authors>(`http://localhost:8200/users/${id}`)
          .pipe(map((user) => pluckFrom(user, 'name', 'email', 'website', 'id')))
      )
    )
  );

  @Input() set userId(n) {
    if (n && Number.isInteger(n)) {
      this.id$.next(n);
    }
  }
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private tss: TransferStateService
  ) {}

  ngOnInit(): void {
    /** ok feeding the id in via an input and the router is a bit of a chore */
    merge(this.id$, timer(10).pipe(map(() => undefined)))
      .pipe(
        take(1),
        switchMap((id: number | undefined) =>
          id ? EMPTY : this.route.params.pipe(pluck('id'), filter(Boolean))
        ),
        tap((id) => this.id$.next(+id))
      )
      .subscribe();
  }
}

function pluckFrom<T>(obj: T, ...props: string[]): Partial<T> {
  const result = {};
  props.forEach((prop) => (result[prop] = obj[prop]));
  return result;
}
