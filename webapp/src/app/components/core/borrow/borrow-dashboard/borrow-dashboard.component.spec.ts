import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDashboardComponent } from './borrow-dashboard.component';

describe('BorrowDashboardComponent', () => {
  let component: BorrowDashboardComponent;
  let fixture: ComponentFixture<BorrowDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
