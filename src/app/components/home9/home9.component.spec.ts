import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home9Component } from './home9.component';

describe('Home9Component', () => {
  let component: Home9Component;
  let fixture: ComponentFixture<Home9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
