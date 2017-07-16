import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Lesson3Component } from './lesson3.component';

describe('Lesson3Component', () => {
  let component: Lesson3Component;
  let fixture: ComponentFixture<Lesson3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ],
      declarations: [ Lesson3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    //expect(component).toBeTruthy();
  });

  it('set hero', () => {
    expect(component.title).toContain('Tour of Heroes');
  });
});
