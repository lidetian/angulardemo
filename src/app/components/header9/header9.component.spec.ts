import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header9Component } from './header9.component';

describe('Header9Component', () => {
  let component: Header9Component;
  let fixture: ComponentFixture<Header9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
