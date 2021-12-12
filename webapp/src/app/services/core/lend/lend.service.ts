import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import USDCToken from '../../../../assets/abis/USDCToken.json';
import Lend from '../../../../assets/abis/Lend.json';
import { Web3Service } from '../../web3/web3.service';

@Injectable({
  providedIn: 'root',
})
export class LendService {
  usdcContract: any;
  lendContract: any;
  usdcTokenAddress: string = environment.usdcTokenAddress;
  lendContractAddress: string = environment.lendContractAddress;

  constructor(private web3: Web3Service) {
    this.init();
  }

  async init() {
    const account = await this.web3.getAccount();
    this.usdcContract = new this.web3.web3.eth.Contract(
      USDCToken.abi as any,
      this.usdcTokenAddress
    );
    this.lendContract = new this.web3.web3.eth.Contract(
      Lend.abi as any,
      this.lendContractAddress
    );
    const amount = '50';
    console.log(this.web3.web3.utils.toWei(amount));
    this.usdcContract.methods
      .approve(this.lendContractAddress, this.web3.web3.utils.toWei(amount))
      .send({ from: account[0] })
      .on('transactionHash', (hash: any) => {
        this.lendContract.methods
          .lendTokens(this.web3.web3.utils.toWei(amount), this.usdcTokenAddress)
          .send({ from: account[0] })
          .on('transactionHash', (hash: any) => {
            // this.setState({ loading: false });
            console.log(hash);
          });
      });
    // this.userExist = await this.userExists();
    // this.ipfsHash = await this.getIpfsHash();
    // console.log(this.userExist, this.ipfsHash);
  }
}
