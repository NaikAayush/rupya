import { Injectable } from '@angular/core';
import Web3 from 'web3';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  constructor() {}

  async loadWeb3() {
    if (window.ethereum) {
      const x = await window.ethereum.selectedAddress;
      console.log(x);
      // return true;
      // await window.ethereum.send('eth_requestAccounts');
      // window.web3 = new Web3(window.ethereum);
      // return true;
    }
    return false;
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

  async login() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      window.location.reload();
    }
  }

  async logout() {
    if (window.ethereum) {
      window.ethereum = null;
      window.web3 = null;
      window.location.reload();
    }
  }
}
