import { Component, Input, OnInit } from '@angular/core';
import { LendBorrowService } from 'src/app/services/core/lend-borrow/lend-borrow.service';
import { LendService } from 'src/app/services/core/lend/lend.service';

@Component({
  selector: 'app-lend-pool-item',
  templateUrl: './lend-pool-item.component.html',
  styleUrls: ['./lend-pool-item.component.css'],
})
export class LendPoolItemComponent implements OnInit {
  @Input() token: string = '';
  @Input() address: string = '';
  @Input() poolValue: number = 0;
  @Input() interest: string = '';
  @Input() logo: string = '';
  @Input() bal: number = 0;
  lendAmount = '';
  enabled: boolean = false;
  usdcLentBal: number = 0;
  loading = true;
  withdrawAmount = '';

  constructor(private lendBorrowService: LendBorrowService) {}

  async ngOnInit() {
    this.bal = await this.lendBorrowService.getUSDCBal();
    this.usdcLentBal = await this.lendBorrowService.amountLent();
    this.poolValue = await this.lendBorrowService.getPoolValue();
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
    this.loading = true;
    await this.lendBorrowService.lend(this.lendAmount);
    this.ngOnInit();
    this.loading = false;
  }

  async withdraw() {
    this.loading = true;
    await this.lendBorrowService.withdraw(this.withdrawAmount);
    this.ngOnInit();
    this.loading = false;
  }
}
