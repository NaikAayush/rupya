import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LendBorrowService } from 'src/app/services/core/lend-borrow/lend-borrow.service';
import { IpfsService } from 'src/app/services/ipfs/ipfs.service';

@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styleUrls: ['./borrow-request.component.css'],
})
export class BorrowRequestComponent implements OnInit, DoCheck {
  toggleStatus = false;
  agriButton: string =
    'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  agriToggle: string = 'translate-x-0';
  submitStatus: boolean = false;

  loanForm = new FormGroup({
    loanAmount: new FormControl(0),
    loanCurrency: new FormControl('USDC'),
    termValue: new FormControl(0),
    termType: new FormControl('Days'),
    loanDescription: new FormControl(''),
    agriLoan: new FormControl(this.toggleStatus),
    agriLoanType: new FormControl(''),
  });

  constructor(
    private ipfs: IpfsService,
    private lendBorrowService: LendBorrowService
  ) {}

  ngOnInit(): void {}

  toggle() {
    if (this.toggleStatus == false) {
      this.toggleStatus = true;
      this.agriButton =
        'bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
      this.agriToggle = 'translate-x-5';
      this.loanForm.value.agriLoan = this.toggleStatus;
    } else {
      this.toggleStatus = false;
      this.agriButton =
        'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
      this.agriToggle = 'translate-x-0';
      this.loanForm.value.agriLoan = this.toggleStatus;
    }
  }

  ngDoCheck() {}

  onSubmit() {
    this.submitStatus = true;
    console.log(this.loanForm.value);
  }

  async onFinalSubmit() {
    console.log(this.loanForm.value);
    const client = this.ipfs.connectToNetwork();
    const result = await this.ipfs.uploadString(
      client,
      JSON.stringify(this.loanForm.value)
    );
    console.log(result.path);
    this.submitStatus = false;
    this.lendBorrowService.createBorrowRequest(
      this.loanForm.value.loanAmount,
      this.loanForm.value.termValue,
      result.path
    );
  }

  onCancel() {
    this.submitStatus = false;
  }
}
