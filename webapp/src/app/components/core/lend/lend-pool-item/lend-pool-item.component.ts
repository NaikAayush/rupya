import { Component, Input, OnInit } from '@angular/core';
import { LendService } from 'src/app/services/core/lend/lend.service';

@Component({
  selector: 'app-lend-pool-item',
  templateUrl: './lend-pool-item.component.html',
  styleUrls: ['./lend-pool-item.component.css'],
})
export class LendPoolItemComponent implements OnInit {
  @Input() token: string = '';
  @Input() address: string = '';
  @Input() poolValue: string = '';
  @Input() interest: string = '';
  @Input() logo: string = '';
  @Input() bal: string = '';
  lendAmount = '';
  enabled: boolean = false;
  usdcLentBal: any;
  loading = true;
  withdrawAmount = '';

  constructor(private lendService: LendService) {}

  async ngOnInit() {
    this.usdcLentBal = await this.lendService.amountLent();
    this.poolValue = await this.lendService.getPoolValue();
    this.loading = false;
  }
  showMenu() {
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }

  async lend() {
    this.lendService.lend(this.lendAmount);
  }

  async withdraw() {
    this.lendService.withdraw(this.withdrawAmount);
  }
}
