import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first/first.component';
import { RightColumnComponent } from '../right-column/right-column.component';
import { LeftColumnComponent } from '../left-column/left-column.component';
import { MiddleColumnComponent } from '../middle-column/middle-column.component';




@NgModule({
  declarations: [FirstComponent, RightColumnComponent, LeftColumnComponent, MiddleColumnComponent
  ],
  exports:[FirstComponent, RightColumnComponent, LeftColumnComponent, MiddleColumnComponent],
  imports: [
    CommonModule,   
  ]
})
export class FirstModule { }
