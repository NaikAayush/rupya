import { Component, Input, OnInit } from '@angular/core';
import { LendBorrowService } from 'src/app/services/core/lend-borrow/lend-borrow.service';

@Component({
  selector: 'app-stake-loans-item',
  templateUrl: './stake-loans-item.component.html',
  styleUrls: ['./stake-loans-item.component.css'],
})
export class StakeLoansItemComponent implements OnInit {
  @Input() user = '';
  @Input() idx = 0;
  @Input() ipfs = '';
  url = '';
  status = '';
  constructor(private lendBorrowService: LendBorrowService) {}

  ngOnInit() {
    this.url = 'https://ipfs.infura.io:5001/api/v0/cat?arg=' + this.ipfs;
  }

  async approve() {
    await this.lendBorrowService.approveBorrowRequest(this.user, this.idx);
  }

  async getStatus() {
    this.status = await this.lendBorrowService.getApprovalStatus(this.idx);
  }
}
