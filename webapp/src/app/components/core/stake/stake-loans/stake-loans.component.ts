import { Component, OnInit } from '@angular/core';
import { CovalentService } from 'src/app/services/covalent/covalent.service';
import { EthersService } from 'src/app/services/ethers/ethers.service';

@Component({
  selector: 'app-stake-loans',
  templateUrl: './stake-loans.component.html',
  styleUrls: ['./stake-loans.component.css'],
})
export class StakeLoansComponent implements OnInit {
  rawData: any;
  data = [] as any;
  loading = true;
  constructor(
    private covalent: CovalentService,
    private ethersService: EthersService
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
}
