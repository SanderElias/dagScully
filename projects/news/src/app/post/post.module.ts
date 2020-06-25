import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AuthorModule } from '../author/author.module';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    AuthorModule
  ]
})
export class PostModule { }
