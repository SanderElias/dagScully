import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsPageRoutingModule } from './docs-page-routing.module';
import { DocsPageComponent } from './docs-page.component';
import { ScullyLibModule } from '@scullyio/ng-lib';


@NgModule({
  declarations: [DocsPageComponent],
  imports: [
    CommonModule,
    DocsPageRoutingModule,
    ScullyLibModule
  ]
})
export class DocsPageModule { }
