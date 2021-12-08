import { Component, OnInit } from '@angular/core';
import { FaucetService } from 'src/app/services/faucet/faucet.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
})
export class FaucetComponent implements OnInit {
  address: string = '0x6D209f66bbE4E075BC4bA51B184E5669cF065268';
  token: string = 'rupya';
  constructor(private faucet: FaucetService) {}

  ngOnInit(): void {}

  getToken() {
    this.faucet.getToken(this.address, this.token);
    // console.log(this.token);
  }
}
