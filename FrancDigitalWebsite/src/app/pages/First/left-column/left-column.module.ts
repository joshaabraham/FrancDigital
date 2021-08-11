import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftColumnComponent } from './left-column.component';



@NgModule({
  declarations: [LeftColumnComponent],
  exports:[LeftColumnComponent],
  imports: [
    CommonModule
  ]
})
export class LeftColumnModule { }
