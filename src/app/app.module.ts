import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lesson2Component } from './lesson2/lesson2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    Lesson2Component
  ]
})
export class AppModule { }
