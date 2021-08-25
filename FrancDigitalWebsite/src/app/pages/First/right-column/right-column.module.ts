import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from './right-column.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [RightColumnComponent],
exports: [RightColumnComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule
  ]
})
export class RightColumnModule { }
