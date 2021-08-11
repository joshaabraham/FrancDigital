import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first/first.component';

import {  MatButtonModule } from '@angular/material/button';
import { LeftColumnModule } from '../left-column/left-column.module';
import { MiddleColumnModule } from '../middle-column/middle-column.module';
import { RightColumnModule } from '../right-column/right-column.module';





@NgModule({
  declarations: [FirstComponent],
  exports:[FirstComponent],
  imports: [
    CommonModule,   
    MatButtonModule,
    LeftColumnModule,
    MiddleColumnModule,
    RightColumnModule
  ]
})
export class FirstModule { }
