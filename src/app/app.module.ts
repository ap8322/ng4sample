import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './common/hero-detail.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MdButtonComponent } from './md-button/md-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    Lesson3Component,
    Lesson5Component,
    DashboardComponent,
    MdButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
