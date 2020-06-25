import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsPageComponent } from './docs-page.component';

const routes: Routes = [{ path: '', component: DocsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsPageRoutingModule { }
