import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [],
})
export class PostsComponent implements OnInit {
  posts$ = this.ps.posts$;

  constructor(private ps: PostsService) {}

  ngOnInit(): void {}
}
