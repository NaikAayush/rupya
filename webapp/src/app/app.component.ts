import { Component, OnInit } from '@angular/core';
import { LendService } from './services/core/lend/lend.service';
import { IpfsService } from './services/ipfs/ipfs.service';
import { SuperfluidService } from './services/superfluid/superfluid.service';
import { Web3Service } from './services/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'webapp';
  isLoggedIn: boolean = false;
  constructor(
    public web3: Web3Service,
    private ipfs: IpfsService
  ) // private lend: LendService // private superfluid: SuperfluidService
  {}

  async ngOnInit() {
    // await this.web3.login();
    this.isLoggedIn = await this.web3.isLoggedIn();
    // await this.lend.init();
    // await this.superfluid.flow();
  }
}
