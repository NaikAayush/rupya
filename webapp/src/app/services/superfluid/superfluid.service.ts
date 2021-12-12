import { Injectable } from '@angular/core';
import { Web3Service } from '../web3/web3.service';
const SuperfluidSDK = require('@superfluid-finance/js-sdk');
// import * as sfI from '@superfluid-finance/js-sdk';
// import { Framework } from '@superfluid-finance/js-sdk';

@Injectable({
  providedIn: 'root',
})
export class SuperfluidService {
  sf: any;
  constructor(private web3: Web3Service) {
    this.sf = new SuperfluidSDK.Framework({
      web3: this.web3.web3,
    });
    this.init();
  }

  async init() {
    await this.sf.initialize();
  }

  async flow() {
    const bob = this.sf.user({
      address: '0x63e09bD18Fbf71e5cF68f6Aaa4F6Dc2F6Ea41f41',
      token: '0x75aaC5B8582F227039644c77Aed1Cb9d1bDad4c8',
    });

    // Constant Flow Agreement
    await bob.flow({
      recipient: '0x66ba284A8ad145b788543643A96B5b40058d4637',
      flowRate: '38580246913580000', // 100 tokens / mo
    });
  }
}
