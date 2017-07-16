import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lesson3Component } from './lesson3/lesson3.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    Lesson3Component
  ]
})
export class AppModule { }
