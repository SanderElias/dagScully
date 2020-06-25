import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AuthorRoutingModule} from './author-routing.module';
import {AuthorComponent} from './author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [CommonModule, AuthorRoutingModule],
  exports: [AuthorComponent],
})
export class AuthorModule {}
