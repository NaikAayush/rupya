import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import contractAbi from '../../../assets/contractAbi.json';

@Injectable({
  providedIn: 'root',
})
export class FaucetService {
  web3: any;
  contract: any;
  faucetAddress: string = environment.faucetAddress;
  contractAddress: string = environment.contractAddress;
  privateKey: string = environment.privateKey;

  constructor() {}

  async init() {
    this.web3 = new Web3(environment.providerURL);

    this.contract = new this.web3.eth.Contract(
      contractAbi as any,
      this.contractAddress,
      { from: environment.faucetAddress }
    );
  }

  async getToken(address: string) {
    const transaction = await this.web3.eth.accounts.signTransaction(
      {
        from: this.faucetAddress,
        to: this.contractAddress,
        gas: 220000,
        nonce: await this.web3.eth.getTransactionCount(
          this.faucetAddress,
          'pending'
        ),
        data: this.contract.methods.faucet(address, 100000).encodeABI(),
      },
      this.privateKey
    );

    const resultTx = await this.web3.eth.sendSignedTransaction(
      transaction.rawTransaction
    );

    console.log(resultTx);
    return resultTx;
  }
}
