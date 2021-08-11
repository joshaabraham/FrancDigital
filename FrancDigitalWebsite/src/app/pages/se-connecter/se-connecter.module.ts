import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeConnecterRoutingModule } from './se-connecter-routing.module';
import { ConnexionAvecComponent } from './connexion-avec/connexion-avec.component';


@NgModule({
  declarations: [
    ConnexionAvecComponent
  ],
  imports: [
    CommonModule,
    SeConnecterRoutingModule
  ]
})
export class SeConnecterModule { }
