import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorsRoutingModule} from './authors-routing.module';
import {AuthorsComponent} from './authors.component';
import {AuthorModule} from '../author/author.module';

@NgModule({
  declarations: [AuthorsComponent],
  imports: [CommonModule,  AuthorModule, AuthorsRoutingModule],
})
export class AuthorsModule {}
