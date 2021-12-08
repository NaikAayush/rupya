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
      const accounts: Array<string> = await window.ethereum.request({
        method: 'eth_accounts',
      });
      if (accounts.length != 0) {
        return true;
      }
      return false;
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
      return false;
    }
  }

  async getAccount(): Promise<string> {
    return await window.ethereum.request({ method: 'eth_accounts' })[0];
  }

  async login() {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      this.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      window.location.reload();
      this.getAccount();
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
  }

  // async logout() {
  //   const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  //   console.log(accounts);
  //   console.log(await window.ethereum.selectedAddress);
  //   if (window.ethereum) {
  //     window.ethereum = null;
  //     this.web3 = null;
  //     window.location.reload();
  //   }
  // }
}
