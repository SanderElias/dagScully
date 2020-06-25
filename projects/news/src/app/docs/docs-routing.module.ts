import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DocsComponent} from './docs.component';

const routes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: ':page',
        loadChildren: () => import('../docs-page/docs-page.module').then((m) => m.DocsPageModule),
      },
      {
        path: '**',
        loadChildren: () => import('../docs-page/docs-page.module').then((m) => m.DocsPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
