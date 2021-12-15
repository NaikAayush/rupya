import { Component, OnInit } from '@angular/core';
import { FaucetService } from 'src/app/services/faucet/faucet.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  address: string = '';
  token: string = 'rupya';
  loading = false;
  toast = false;
  constructor(
    private faucet: FaucetService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {}

  async getToken() {
    this.loading = true;
    await this.faucet.getToken(this.address, this.token);
    this.loading = false;
    this.toast = true;
  }
}
