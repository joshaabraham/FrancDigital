import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeConnecterRoutingModule } from './se-connecter-routing.module';
import { SeConnecterComponent } from './se-connecter.component';


@NgModule({
  declarations: [
    SeConnecterComponent
  ],
  imports: [
    CommonModule,
    SeConnecterRoutingModule,
  ]
})
export class SeConnecterModule { }
