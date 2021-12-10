import { Component, OnInit } from '@angular/core';
import { CovalentService } from 'src/app/services/covalent/covalent.service';

@Component({
  selector: 'app-lend-dashboard',
  templateUrl: './lend-dashboard.component.html',
  styleUrls: ['./lend-dashboard.component.css'],
})
export class LendDashboardComponent implements OnInit {
  usdc: any;
  constructor(private covalent: CovalentService) {}

  async ngOnInit() {
    console.log('s');
    this.usdc = await this.covalent.getUSDCTokenBalance();
    console.log(this.usdc);
  }
}
