import { environment } from './../environments/environment';
import { HeaderModule } from './layout/header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: 'imgUri',
      useValue: environment.imgUri
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
