import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { environment } from 'src/environments/environment';
declare let window: any;
import Web3Abi, { AbiCoder } from 'web3-eth-abi';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  web3: any;

  address: any;
  constructor() {
    this.web3 = new Web3(window.ethereum);
  }

  async isLoggedIn() {
    if (window.ethereum) {
      // console.log('w.eth');
      const accounts: Array<string> = await window.ethereum.request({
        method: 'eth_accounts',
      });
      // console.log(accounts);
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
    return await window.ethereum.request({ method: 'eth_accounts' });
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

  async decodeData(typesArray: Array<Object>, raw_log_data: string) {
    const abiCoder = Web3Abi as unknown as AbiCoder;
    // const res = await this.covalent.getEvent();
    // console.log(res.raw_log_topics[0]);
    // console.log(res.raw_log_data);

    // Demo types array
    // const typesArray = [
    //   { type: 'address', name: '_From' },
    //   { type: 'string', name: 'username' },
    //   { type: 'string', name: 'ipfsHash' },
    // ];

    const decodedParameters = abiCoder.decodeParameters(
      typesArray,
      raw_log_data
    );
    console.log(decodedParameters);
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
