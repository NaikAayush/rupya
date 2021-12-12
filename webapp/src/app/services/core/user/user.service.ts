import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from '../../../../assets/abis/User.json';
import { Web3Service } from '../../web3/web3.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userContract: any;
  userExist: boolean = false;
  ipfsHash: string = '';
  userContractAddress: string = environment.userContractAddress;

  constructor(private web3: Web3Service) {
    this.init();
  }

  async init() {
    this.userContract = new this.web3.web3.eth.Contract(
      User.abi as any,
      this.userContractAddress
    );

    this.userExist = await this.userExists();
    this.ipfsHash = await this.getIpfsHash();
    console.log(this.userExist, this.ipfsHash);
  }

  async createUser(ipfsHash: string) {
    // await this.web3.isLoggedIn();
    const account = await this.web3.getAccount();
    // console.log(account[0]);
    const res = await this.userContract.methods
      .createUser(ipfsHash)
      .send({ from: account[0] });
    console.log(res);
  }

  async userExists() {
    const account = await this.web3.getAccount();
    return await this.userContract.methods
      .userExists()
      .call({ from: account[0] });
  }

  async getIpfsHash() {
    const account = await this.web3.getAccount();
    return await this.userContract.methods
      .getIpfsHash()
      .call({ from: account[0] });
  }
}
