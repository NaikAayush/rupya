import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/web3/web3.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private web3: Web3Service) {}

  ngOnInit(): void {}

  async logout() {
    await this.web3.logout();
  }
}
