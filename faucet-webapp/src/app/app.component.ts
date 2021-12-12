import { Component } from '@angular/core';
import { FaucetService } from './services/faucet/faucet.service';
import { TokenService } from './services/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'faucet-webapp';
  isLoggedIn: boolean = false;

  constructor(private faucet: FaucetService, private token: TokenService) {
    this.faucet.init();
    // this.web3.loadWeb3();
    // this.onInit();
  }
  addUSDC() {
    this.token.addToken('usdc');
  }
  addRupya() {
    this.token.addToken('rupya');
  }
}
