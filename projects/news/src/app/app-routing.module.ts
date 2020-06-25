import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)},
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule),
  },
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then((m) => m.PostsModule)},
  {path: '**', loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
