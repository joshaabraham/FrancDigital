import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiddleColumnComponent } from './middle-column.component';



@NgModule({
  declarations: [MiddleColumnComponent],
  exports: [MiddleColumnComponent],
  imports: [
    CommonModule
  ]
})
export class MiddleColumnModule { }
