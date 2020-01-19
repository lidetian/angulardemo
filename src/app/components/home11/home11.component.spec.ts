import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home11Component } from './home11.component';

describe('Home11Component', () => {
  let component: Home11Component;
  let fixture: ComponentFixture<Home11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
