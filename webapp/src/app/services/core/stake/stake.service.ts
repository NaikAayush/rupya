import { Injectable } from '@angular/core';
import { ContractInterface, ethers } from 'ethers';
import { environment } from 'src/environments/environment';
import RupyaToken from '../../../../assets/abis/RupyaToken.json';
import Stake from '../../../../assets/abis/Stake.json';
import { EthersService } from '../../ethers/ethers.service';
// import { Web3Service } from '../../web3/web3.service';

@Injectable({
  providedIn: 'root',
})
export class StakeService {
  stakeSignerContract: any;
  stakeProviderContract: any;
  rupyaSignerContract: any;
  account: any;

  constructor(private ethersService: EthersService) {}

  async initContracts() {
    this.stakeSignerContract = await this.ethersService.initSignerContract(
      environment.stakeContractAddress,
      Stake.abi as ContractInterface
    );
    this.stakeProviderContract = await this.ethersService.initProviderContract(
      environment.stakeContractAddress,
      Stake.abi as ContractInterface
    );
    this.rupyaSignerContract = await this.ethersService.initSignerContract(
      environment.rupyaContractAddress,
      RupyaToken.abi as ContractInterface
    );
  }

  async stake(amount: string) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    console.log(this.account[0]);
    console.log(this.ethersService.utils.parseEther(amount).toString());
    const tx = await this.rupyaSignerContract.approve(
      environment.stakeContractAddress,
      this.ethersService.utils.parseEther(amount).toString()
    );
    await tx.wait();
    await this.stakeSignerContract.stakeTokens(
      this.ethersService.utils.parseEther(amount).toString(),
      environment.rupyaContractAddress,
      0
    );
    await tx.wait();
  }

  async withdraw(amount: string) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    console.log(this.account[0]);
    const tx = await this.stakeSignerContract.withdrawTokens(
      this.ethersService.utils.parseEther(amount).toString(),
      environment.rupyaContractAddress
    );
    await tx.wait();
  }

  async getWithdrawableRUP() {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    // console.log(this.account[0]);
    let bal = await this.stakeSignerContract.getWithdrawbleTokens();
    return this.ethersService.utils.formatEther(bal);
  }

  async getstakedRUP() {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    // console.log(this.account[0]);
    let bal = await this.stakeSignerContract.getUserTokenValue(
      this.account[0],
      environment.rupyaContractAddress
    );
    return this.ethersService.utils.formatEther(bal);
  }
}
