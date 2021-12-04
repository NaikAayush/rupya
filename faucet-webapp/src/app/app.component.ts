import { Component } from '@angular/core';
import { Web3Service } from './services/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'faucet-webapp';
  isLoggedIn: boolean = false;

  constructor(private web3: Web3Service) {
    this.web3.loadWeb3();
    this.onInit();
  }

  async onInit() {
    this.isLoggedIn = await this.web3.isLoggedIn();
  }
}
