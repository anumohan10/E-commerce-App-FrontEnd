import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlogComponent } from './orderlog.component';

describe('OrderlogComponent', () => {
  let component: OrderlogComponent;
  let fixture: ComponentFixture<OrderlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
