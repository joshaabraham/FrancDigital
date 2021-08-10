import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from './pages/First/first/first.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService} from './Services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    BrowserAnimationsModule,

    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi:true,
    useClass: TokenInterceptorService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
