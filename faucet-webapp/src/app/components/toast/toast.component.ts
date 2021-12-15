import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  enabled: boolean = true;

  @Input() title = '';
  @Input() body = '';

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.enabled = false;
  }
}
