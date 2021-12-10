import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendPoolItemComponent } from './lend-pool-item.component';

describe('LendPoolItemComponent', () => {
  let component: LendPoolItemComponent;
  let fixture: ComponentFixture<LendPoolItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendPoolItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendPoolItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
