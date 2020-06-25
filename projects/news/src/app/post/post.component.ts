import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {ActivatedRoute} from '@angular/router';
import {pluck, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [],
})
export class PostComponent implements OnInit {
  post$ = this.route.params.pipe(
    pluck('id'),
    filter(Boolean),
    switchMap((id) => this.ps.getPost(+id))
  );
  constructor(private route: ActivatedRoute, private ps: PostsService) {}

  ngOnInit(): void {}
}
