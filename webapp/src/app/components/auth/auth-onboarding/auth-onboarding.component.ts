import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-onboarding',
  templateUrl: './auth-onboarding.component.html',
  styleUrls: ['./auth-onboarding.component.css'],
})
export class AuthOnboardingComponent implements OnInit {
  userExists: boolean = false;
  stage1: boolean = true;
  stage2: boolean = false;

  constructor() {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  kycForm = new FormGroup({
    aadhaar: new FormControl(''),
    pan: new FormControl(''),
    income: new FormControl(''),
    occupation: new FormControl(''),
    about: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
