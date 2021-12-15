import { Injectable } from '@angular/core';
import { ContractInterface, ethers, utils } from 'ethers';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class EthersService {
  provider: any;
  signer: any;
  utils = utils;

  constructor() {}

  async initEthers() {
    if (window.ethereum) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      await this.provider.send('eth_requestAccounts', []);
      this.signer = this.provider.getSigner();
    }
  }

  async initSignerContract(contractAddress: string, abi: ContractInterface) {
    await this.initEthers();
    return new ethers.Contract(contractAddress, abi, this.signer);
  }

  async initProviderContract(contractAddress: string, abi: ContractInterface) {
    await this.initEthers();
    return new ethers.Contract(contractAddress, abi, this.provider);
  }
}
