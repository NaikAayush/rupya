import { Component, OnInit } from '@angular/core';
import { CovalentService } from 'src/app/services/covalent/covalent.service';
import { EthersService } from 'src/app/services/ethers/ethers.service';
import { SuperfluidService } from 'src/app/services/superfluid/superfluid.service';

@Component({
  selector: 'app-borrow-dashboard',
  templateUrl: './borrow-dashboard.component.html',
  styleUrls: ['./borrow-dashboard.component.css'],
})
export class BorrowDashboardComponent implements OnInit {
  rawData: any;
  data = [] as any;
  loading = true;
  constructor(
    private covalent: CovalentService,
    private ethersService: EthersService,
    private sf: SuperfluidService
  ) {}

  async ngOnInit() {
    this.rawData = await this.covalent.getLoans();
    console.log(this.rawData);
    await this.rawData.forEach(async (element: any) => {
      var decode: any = await this.ethersService.decodeData(
        ['address', 'uint256', 'string'],
        element.raw_log_data
      );
      var decodeNew = [];
      decodeNew[0] = decode[0];
      decodeNew[1] =
        (this.ethersService.fromWei(decode[1]) as unknown as number) *
        1000000000000000000;
      decodeNew[2] = decode[2];
      this.data.push(decodeNew);
    });
    console.log(this.data);
    this.loading = false;
  }

  async pay() {
    this.sf.init();
  }
}
