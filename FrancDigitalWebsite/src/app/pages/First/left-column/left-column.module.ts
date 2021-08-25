import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftColumnComponent } from './left-column.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [LeftColumnComponent],
  exports:[LeftColumnComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class LeftColumnModule { }
