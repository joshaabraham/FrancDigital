import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftColumnComponent } from './pages/First/left-column/left-column.component';
import { MiddleColumnComponent } from './pages/First/middle-column/middle-column.component';
import { RightColumnComponent } from './pages/First/right-column/right-column.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftColumnComponent,
    MiddleColumnComponent,
    RightColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
