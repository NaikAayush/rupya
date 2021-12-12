import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/core/user/user.service';
import { IpfsService } from 'src/app/services/ipfs/ipfs.service';

@Component({
  selector: 'app-auth-onboarding',
  templateUrl: './auth-onboarding.component.html',
  styleUrls: ['./auth-onboarding.component.css'],
})
export class AuthOnboardingComponent implements OnInit {
  userExists: boolean = false;
  stage1: boolean = true;
  stage2: boolean = false;

  constructor(private ipfs: IpfsService, private user: UserService) {}

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

  onSubmitStage1() {
    this.stage1 = false;
    this.stage2 = true;
    console.log(this.profileForm.value);
  }

  async onSubmitStage2() {
    const client = this.ipfs.connectToNetwork();
    console.log(this.kycForm.value);

    const result = await this.ipfs.uploadString(
      client,
      JSON.stringify({
        profile: this.profileForm.value,
        kyc: this.kycForm.value,
      })
    );

    console.log(result.path);
    await this.user.createUser(result.path);
  }
}
