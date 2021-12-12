import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/core/user/user.service';
import { Web3Service } from 'src/app/services/web3/web3.service';
import { RoutesArray } from '../../../models/routes-array.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  route: string = '';
  address: string = '';
  ipfsHash: string = '';

  public routes: Array<RoutesArray> = [
    {
      name: 'Dashboard',
      route: '/dashboard',
      svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      name: 'Lend',
      route: '/lend',
      svg: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      name: 'Borrow',
      route: '/borrow',
      svg: 'M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20',
    },
    {
      name: 'Stake',
      route: '/stake',
      svg: 'M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      name: 'Profile',
      route: '/profile/onboarding',
      svg: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];
  constructor(private web3: Web3Service, private user: UserService) {}

  async ngOnInit() {
    this.address = await this.web3.getAccount();
    console.log(this.address);
    await this.user.init();
    this.ipfsHash = this.user.ipfsHash;
    console.log(this.ipfsHash);
    // console.log(this.router.url);
  }
}
