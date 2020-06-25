import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthorsComponent} from './authors.component';
import {AuthorComponent} from '../author/author.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsComponent,
    children: [
      {
        path: ':id',
        component: AuthorComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsRoutingModule {}
