import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService} from './Services/token-interceptor.service';

import { IntrouvableComponent } from './pages/introuvable/introuvable.component';
import { FirstModule } from './pages/First/first/first.module';


@NgModule({
  declarations: [
    AppComponent,
    IntrouvableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FirstModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi:true,
    useClass: TokenInterceptorService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
