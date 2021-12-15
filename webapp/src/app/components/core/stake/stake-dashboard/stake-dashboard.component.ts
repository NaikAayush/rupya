import { Component, Input, OnInit } from '@angular/core';
import { StakeService } from 'src/app/services/core/stake/stake.service';

@Component({
  selector: 'app-stake-dashboard',
  templateUrl: './stake-dashboard.component.html',
  styleUrls: ['./stake-dashboard.component.css'],
})
export class StakeDashboardComponent implements OnInit {
  loading: boolean = true;
  @Input() token: string = '';
  @Input() address: string = '';
  @Input() poolValue: string = '';
  @Input() interest: string = '';
  @Input() logo: string = '';
  enabled: boolean = false;
  stakeAmount = '';
  withdrawAmount = '';
  withdrawBal: any;
  stakedBal: any;

  constructor(private stakeService: StakeService) {}

  async ngOnInit() {
    this.withdrawBal = Math.floor(
      (await this.stakeService.getWithdrawableRUP()) as unknown as number
    );
    this.stakedBal = Math.floor(
      (await this.stakeService.getstakedRUP()) as unknown as number
    );
    this.loading = false;
  }

  showMenu() {
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }

  async stake() {
    this.loading = true;
    await this.stakeService.stake(this.stakeAmount);
    this.loading = false;
    await this.ngOnInit();
  }

  async withdraw() {
    this.loading = true;
    await this.stakeService.withdraw(this.withdrawAmount);
    this.loading = false;
    await this.ngOnInit();
  }
}
