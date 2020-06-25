import {Component, OnInit} from '@angular/core';
import {tap, shareReplay, take} from 'rxjs/operators';
import {PostsService, Post} from '../posts.service';
import { TransferStateService } from '@scullyio/ng-lib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  posts$ = this.ps.posts$;
  // posts$ = this.tss
  // .useScullyTransferState('posts', this.http.get<Post[]>('http://localhost:8200/posts'))
  // .pipe(take(1),shareReplay(1));

  constructor(private ps: PostsService,private tss:TransferStateService, private http:HttpClient) {}

  ngOnInit(): void {}
}
