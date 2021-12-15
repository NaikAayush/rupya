import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import USDCToken from '../../../assets/abis/USDCToken.json';
import RupyaToken from '../../../assets/abis/RupyaToken.json';
import { ethers, Wallet } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class FaucetService {
  web3: any;
  provider: ethers.providers.JsonRpcProvider;
  signer: any;
  wallet: ethers.Wallet;
  faucetAddress: string = environment.faucetAddress;
  rupyaToken: any;
  usdcToken: any;
  rupyaAddress: string = environment.rupyaAddress;
  usdcAddress: string = environment.usdcAddress;
  privateKey: string = environment.privateKey;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(
      environment.providerURL
    );
    this.wallet = new Wallet(this.privateKey, this.provider);
  }

  async getToken(address: string, token: string) {
    var tokenAddress = '';
    var data: any;
    if (token == 'rupya') {
      const iFace = new ethers.utils.Interface(RupyaToken.abi);
      data = iFace.encodeFunctionData('faucet', [address, 1000]);
      tokenAddress = this.rupyaAddress;
    }
    if (token == 'usdc') {
      tokenAddress = this.usdcAddress;
      const iFace = new ethers.utils.Interface(USDCToken.abi);
      data = iFace.encodeFunctionData('faucet', [address, 1000]);
    }
    await this.wallet.sendTransaction({
      from: this.faucetAddress,
      to: tokenAddress,
      gasLimit: 220000,
      nonce: await this.provider.getTransactionCount(
        this.faucetAddress,
        'latest'
      ),
      data: data,
    });
  }
}
