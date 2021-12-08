import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css'],
})
export class SidebarItemComponent implements OnInit, OnChanges {
  active: boolean = false;
  brr: string = 'text-black';
  @Input() name: string = '';
  @Input() svg: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.active) {
      this.brr = 'bg-theme-primary bg-opacity-10';
    }
  }
  ngOnChanges() {
    if ('/' + this.name.toLowerCase() == this.router.url) {
      console.log(this.router.url);
      this.brr = 'font-semibold bg-indigo-500 bg-opacity-10 text-gray-900';
    }
    // console.log(this.name.toLowerCase());
    // console.log(this.router.url);
  }
}
