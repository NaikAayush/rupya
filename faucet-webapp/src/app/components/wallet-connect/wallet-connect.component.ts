import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3/web3.service';

@Component({
  selector: 'app-wallet-connect',
  templateUrl: './wallet-connect.component.html',
  styleUrls: ['./wallet-connect.component.css'],
})
export class WalletConnectComponent implements OnInit {
  constructor(private web3: Web3Service) {}

  ngOnInit(): void {}

  async login() {
    await this.web3.login();
  }
}
