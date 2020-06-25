import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Authors} from './Authors.interface';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: [],
})
export class AuthorsComponent implements OnInit {
  authors$ = this.http.get<Authors[]>('http://localhost:8200/users');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
