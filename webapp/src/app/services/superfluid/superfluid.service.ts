import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
declare let window: any;
import { Framework } from '@superfluid-finance/sdk-core';

@Injectable({
  providedIn: 'root',
})
export class SuperfluidService {
  sf: any;
  constructor() {}

  async init() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const sf = await Framework.create({
      networkName: 'mumbai',
      provider: provider,
    });
    const x = await sf.cfaV1
      .createFlow({
        sender: '0xd62b4039F0AaCDdAe56D7be5066B539cA359f562',
        receiver: '0x11ca81a394240d1e0001872f6c05d33439932967',
        superToken: '0xc9c3212a4aAFE00070aDb570ce9bBa20a5baA266',
        flowRate: '385802469135802',
      })
      .exec(signer);
    console.log(x);

    let userAddress = await signer.getAddress();
    console.log('a', userAddress);
  }
}
