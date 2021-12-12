import { Component, Input, OnInit } from '@angular/core';

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
  enabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showMenu() {
    if (this.enabled) {
      this.enabled = false;
    } else {
      this.enabled = true;
    }
  }
}
