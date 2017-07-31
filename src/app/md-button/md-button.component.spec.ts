import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdButtonComponent } from './md-button.component';

describe('MdButtonComponent', () => {
  let component: MdButtonComponent;
  let fixture: ComponentFixture<MdButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
