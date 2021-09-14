import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { LignedetempsComponent } from './lignedetemps.component';



@NgModule({
  declarations: [LignedetempsComponent],
  exports: [LignedetempsComponent],
  imports: [
    CommonModule,
    MatStepperModule
  ]
})
export class LignedetempsModule { }
