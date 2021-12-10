import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  loanForm = new FormGroup({
    loanAmount: new FormControl(''),
    loanCurrency: new FormControl('USD'),
    termValue: new FormControl(''),
    termType: new FormControl('Weeks'),
    loanDescription: new FormControl(''),
    agriLoan: new FormControl(this.toggleStatus),
    agriLoanType: new FormControl(''),
  });

  constructor(private ipfs: IpfsService) {}

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
    console.log(this.loanForm.value);
  }
}
