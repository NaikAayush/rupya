import { Injectable } from '@angular/core';
import LendBorrow from '../../../../assets/abis/LendBorrow.json';
import { EthersService } from '../../ethers/ethers.service';
import { environment } from 'src/environments/environment';
import USDCToken from '../../../../assets/abis/USDCToken.json';
import RupyaToken from '../../../../assets/abis/RupyaToken.json';
import { ContractInterface } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class LendBorrowService {
  lendBorrowContract: any;
  usdcContract: any;
  usdcBal: any;
  account: any;

  constructor(private ethersService: EthersService) {}
  async initContracts() {
    this.lendBorrowContract = await this.ethersService.initSignerContract(
      environment.lendBorrowContractAddress,
      LendBorrow.abi as ContractInterface
    );
    this.usdcContract = await this.ethersService.initSignerContract(
      environment.usdcTokenAddress,
      USDCToken.abi as ContractInterface
    );
  }

  async lend(amount: string) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    const tx = await this.usdcContract.approve(
      environment.lendBorrowContractAddress,
      this.ethersService.utils.parseEther(amount).toString()
    );
    await tx.wait();
    const tx1 = await this.lendBorrowContract.lendTokens(
      this.ethersService.utils.parseEther(amount).toString(),
      environment.usdcTokenAddress
    );
    await tx1.wait();
  }

  async withdraw(amount: string) {
    await this.initContracts();
    const tx = await this.lendBorrowContract.withdrawTokens(
      this.ethersService.toWei(amount),
      environment.usdcTokenAddress
    );
    await tx.wait();
  }

  async createBorrowRequest(
    principal: number,
    duration: number,
    ipfsHash: string
  ) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    const tx = await this.lendBorrowContract.createBorrowRequest(
      principal,
      duration,
      environment.usdcTokenAddress,
      await this.getTotalAmount(principal, duration),
      ipfsHash
    );
    await tx.wait();
  }

  async approveBorrowRequest(user: string, index: number) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    const tx = await this.lendBorrowContract.approveBorrowRequest(user, index);
    await tx.wait();
  }

  async getApprovalStatus(index: number) {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    return await this.lendBorrowContract.getApprovalStatus(index);
    // await tx.wait();
  }

  async getUSDCBal() {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    this.usdcBal = await this.usdcContract.balanceOf(this.account[0]);
    console.log(this.usdcBal);
    return Math.floor(
      this.ethersService.fromWei(this.usdcBal) as unknown as number
    );
  }

  async amountLent() {
    await this.initContracts();
    this.account = await this.ethersService.provider.send(
      'eth_requestAccounts',
      []
    );
    return Math.floor(
      this.ethersService.fromWei(
        await this.lendBorrowContract.getUserTokenValue(
          this.account[0],
          environment.usdcTokenAddress
        )
      ) as unknown as number
    );
  }

  async getPoolValue() {
    await this.initContracts();
    this.usdcBal = this.ethersService.fromWei(
      await this.usdcContract.balanceOf(environment.lendBorrowContractAddress)
    );
    return Math.floor(this.usdcBal as unknown as number);
  }

  async getTotalAmount(principal: number, duration: number) {
    const interest = 0.04;
    return principal + (principal * duration * interest) / 100;
  }
}
