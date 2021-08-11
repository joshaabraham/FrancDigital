import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from './right-column.component';



@NgModule({
  declarations: [RightColumnComponent],
exports: [RightColumnComponent],
  imports: [
    CommonModule
  ]
})
export class RightColumnModule { }
