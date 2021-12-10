import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOnboardingComponent } from './auth-onboarding.component';

describe('AuthOnboardingComponent', () => {
  let component: AuthOnboardingComponent;
  let fixture: ComponentFixture<AuthOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
