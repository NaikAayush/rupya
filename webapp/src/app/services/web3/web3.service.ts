import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { environment } from 'src/environments/environment';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  web3: any;
  address: any;
  constructor() {
    // this.web3 = new Web3(environment.providerURL);
  }

  async isLoggedIn() {
    if (window.ethereum) {
      const status = await window.ethereum.selectedAddress;
      if (status != null) {
        return true;
      }
      return false;
    }
    return false;
  }

  async getAccount(): Promise<string> {
    return await window.ethereum.selectedAddress;
  }

  async login() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      this.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      window.location.reload();
      this.getAccount();
    }
  }

  // async logout() {
  //   console.log(await window.ethereum.selectedAddress);
  //   if (window.ethereum) {
  //     window.ethereum = null;
  //     this.web3 = null;
  //     window.location.reload();
  //   }
  // }
}
