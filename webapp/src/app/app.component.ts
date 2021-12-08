import { Component, OnInit } from '@angular/core';
import { IpfsService } from './services/ipfs/ipfs.service';
import { Web3Service } from './services/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'webapp';
  isLoggedIn: boolean = false;
  constructor(public web3: Web3Service, private ipfs: IpfsService) {}

  async ngOnInit() {
    // await this.web3.login();
    this.isLoggedIn = await this.web3.isLoggedIn();
    await this.ipfsTest();
  }

  async ipfsTest() {
    const client = this.ipfs.connectToNetwork();
    const x = await this.ipfs.uploadString(client, 'bb');
    console.log(x);
  }
}
