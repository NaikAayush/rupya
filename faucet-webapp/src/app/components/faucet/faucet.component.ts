import { Component, OnInit } from '@angular/core';
import { FaucetService } from 'src/app/services/faucet/faucet.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  address: string = '0x66ba284A8ad145b788543643A96B5b40058d4637';
  constructor(private faucet: FaucetService) {}

  ngOnInit(): void {}

  getToken() {
    this.faucet.getToken(this.address);
  }
}
