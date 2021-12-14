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
    this.loading = false;
    this.usdcBalance = Math.floor(await this.lend.getUSDCBal());
  }

  async loadPools() {}
}
