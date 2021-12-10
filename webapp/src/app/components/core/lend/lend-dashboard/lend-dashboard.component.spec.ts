import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendDashboardComponent } from './lend-dashboard.component';

describe('LendDashboardComponent', () => {
  let component: LendDashboardComponent;
  let fixture: ComponentFixture<LendDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
