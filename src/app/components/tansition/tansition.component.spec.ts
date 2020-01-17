import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TansitionComponent } from './tansition.component';

describe('TansitionComponent', () => {
  let component: TansitionComponent;
  let fixture: ComponentFixture<TansitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TansitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TansitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
