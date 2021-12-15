import { Component, OnInit } from '@angular/core';
import { BigNumber } from 'ethers';
import { LendBorrowService } from 'src/app/services/core/lend-borrow/lend-borrow.service';
import { LendService } from 'src/app/services/core/lend/lend.service';
import { CovalentService } from 'src/app/services/covalent/covalent.service';
import { EthersService } from 'src/app/services/ethers/ethers.service';

@Component({
  selector: 'app-lend-dashboard',
  templateUrl: './lend-dashboard.component.html',
  styleUrls: ['./lend-dashboard.component.css'],
})
export class LendDashboardComponent implements OnInit {
  usdc: any;
  loading: boolean = true;
  usdcBalance: any;
  constructor(
    private covalent: CovalentService,
    private lend: LendService,
    private ethersService: EthersService,
    private lendBorrowService: LendBorrowService
  ) {}

  async ngOnInit() {
    this.loading = false;
    // this.usdcBalance = Math.floor(await this.lend.getUSDCBal());
    // const res = await this.lendBorrowService.getUSDCBal();
    // this.usdcBalance = Math.floor(
    //   this.ethersService.fromWei(res) as unknown as number
    // );
    // this.usdcBalance = Math.floor(res1);
    // const data = await this.covalent.getTopic();
    // console.log(data);
    // const res = await this.ethersService.decodeData(
    //   ['address', 'uint256'],
    //   data.raw_log_data
    // );
    // console.log(this.ethersService.utils.formatEther(res[1]).toString());
  }

  async loadPools() {}
}
