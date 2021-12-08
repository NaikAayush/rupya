import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3/web3.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
  constructor(private web3: Web3Service) {}

  ngOnInit() {}

  async login() {
    await this.web3.login();
  }
}
