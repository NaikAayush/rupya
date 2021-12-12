import { Component, OnInit } from '@angular/core';
import { LendService } from 'src/app/services/core/lend/lend.service';
import { CovalentService } from 'src/app/services/covalent/covalent.service';

@Component({
  selector: 'app-lend-dashboard',
  templateUrl: './lend-dashboard.component.html',
  styleUrls: ['./lend-dashboard.component.css'],
})
export class LendDashboardComponent implements OnInit {
  usdc: any;
  loading: boolean = true;
  usdcBalance: any;
  constructor(private covalent: CovalentService, private lend: LendService) {}

  async ngOnInit() {
    // this.usdc = await this.covalent.getUSDCTokenBalance();
    // console.log(this.usdc);
    this.loading = false;
    this.usdcBalance = await this.lend.getUSDCBal();
    // this.loadPools();
  }

  async loadPools() {}
}
