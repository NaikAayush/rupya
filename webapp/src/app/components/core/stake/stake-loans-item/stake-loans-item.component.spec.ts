import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeLoansItemComponent } from './stake-loans-item.component';

describe('StakeLoansItemComponent', () => {
  let component: StakeLoansItemComponent;
  let fixture: ComponentFixture<StakeLoansItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeLoansItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeLoansItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
