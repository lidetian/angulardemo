import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News12Component } from './news12.component';

describe('News12Component', () => {
  let component: News12Component;
  let fixture: ComponentFixture<News12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
