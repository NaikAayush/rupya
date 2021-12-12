import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import USDCToken from '../../../assets/abis/USDCToken.json';
import RupyaToken from '../../../assets/abis/RupyaToken.json';

@Injectable({
  providedIn: 'root',
})
export class FaucetService {
  web3: any;
  faucetAddress: string = environment.faucetAddress;
  rupyaToken: any;
  usdcToken: any;
  rupyaAddress: string = environment.rupyaAddress;
  usdcAddress: string = environment.usdcAddress;
  privateKey: string = environment.privateKey;

  constructor() {}

  async init() {
    this.web3 = new Web3(environment.providerURL);

    this.rupyaToken = new this.web3.eth.Contract(
      RupyaToken.abi as any,
      this.rupyaAddress,
      { from: environment.faucetAddress }
    );
    this.usdcToken = new this.web3.eth.Contract(
      USDCToken.abi as any,
      this.usdcAddress,
      { from: environment.faucetAddress }
    );
  }

  async getToken(address: string, token: string) {
    var tokenAddress = '';
    var data: any;
    if (token == 'rupya') {
      tokenAddress = this.rupyaAddress;
      data = this.rupyaToken.methods.faucet(address, 1000).encodeABI();
    }
    if (token == 'usdc') {
      tokenAddress = this.usdcAddress;
      data = this.usdcToken.methods.faucet(address, 1000).encodeABI();
    }
    const transaction = await this.web3.eth.accounts.signTransaction(
      {
        from: this.faucetAddress,
        to: tokenAddress,
        gas: 220000,
        nonce: await this.web3.eth.getTransactionCount(
          this.faucetAddress,
          'pending'
        ),
        data: data,
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
