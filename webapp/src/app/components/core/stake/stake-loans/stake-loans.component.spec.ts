import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeLoansComponent } from './stake-loans.component';

describe('StakeLoansComponent', () => {
  let component: StakeLoansComponent;
  let fixture: ComponentFixture<StakeLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
