import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Authors} from './Authors.interface';
import {TransferStateService} from '@scullyio/ng-lib';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: [],
})
export class AuthorsComponent implements OnInit {
  authors$ = this.tss.useScullyTransferState(
    'authors',
    this.http
      .get<Authors[]>('http://localhost:8200/users')
      .pipe(map((rows) => rows.map((row) => ({id: row.id, name: row.name}))))
  );

  constructor(private http: HttpClient, private tss: TransferStateService) {}

  ngOnInit(): void {}
}
