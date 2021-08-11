import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from './right-column.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [RightColumnComponent],
exports: [RightColumnComponent],
  imports: [
    CommonModule,

    MatButtonModule
  ]
})
export class RightColumnModule { }
