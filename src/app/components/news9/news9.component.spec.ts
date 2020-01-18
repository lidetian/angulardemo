import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News9Component } from './news9.component';

describe('News9Component', () => {
  let component: News9Component;
  let fixture: ComponentFixture<News9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
