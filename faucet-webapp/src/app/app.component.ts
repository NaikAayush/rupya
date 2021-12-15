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
  loading = false;

  constructor(private faucet: FaucetService, private token: TokenService) {}
  async addUSDC() {
    await this.token.addToken('usdc');
  }
  async addRupya() {
    await this.token.addToken('rupya');
  }
  async addUSDCx() {
    await this.token.addToken('usdcx');
  }
  async addRupyax() {
    await this.token.addToken('rupyax');
  }
}
