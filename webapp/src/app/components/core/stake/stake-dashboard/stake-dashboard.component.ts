import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.loading = false;
  }

  showMenu() {
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }
}
