import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeDashboardComponent } from './stake-dashboard.component';

describe('StakeDashboardComponent', () => {
  let component: StakeDashboardComponent;
  let fixture: ComponentFixture<StakeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
