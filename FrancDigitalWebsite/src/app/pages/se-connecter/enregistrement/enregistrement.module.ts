import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnregistrementComponent } from './enregistrement.component';



@NgModule({
  declarations: [
    EnregistrementComponent
  ],
  exports:[EnregistrementComponent],
  imports: [
    CommonModule
  ]
})
export class EnregistrementModule { }
