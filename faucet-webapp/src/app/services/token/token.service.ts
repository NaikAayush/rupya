import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  rupyaAddress = environment.rupyaAddress;
  rupyaSymbol = 'RUP';
  rupyaDecimals = 18;
  rupyaImage = environment.url + '/assets/rup.png';

  usdcAddress = environment.usdcAddress;
  usdcSymbol = 'USDC';
  usdcDecimals = 18;
  usdcImage = environment.url + '/assets/usdc.png';

  rupyaxAddress = environment.rupx;
  rupyaxSymbol = 'RUPx';
  rupyaxDecimals = 18;
  rupyaxImage = environment.url + '/assets/rup.png';

  usdcxAddress = environment.usdcx;
  usdcxSymbol = 'USDCx';
  usdcxDecimals = 18;
  usdcxImage = environment.url + '/assets/usdc.png';

  options: any;

  constructor() {}

  async addToken(token: string) {
    console.log(this.rupyaImage);
    if (token == 'rupya') {
      this.options = {
        address: this.rupyaAddress,
        symbol: this.rupyaSymbol,
        decimals: this.rupyaDecimals,
        image: this.rupyaImage,
      };
    } else if (token == 'usdc') {
      this.options = {
        address: this.usdcAddress,
        symbol: this.usdcSymbol,
        decimals: this.usdcDecimals,
        image: this.usdcImage,
      };
    }
    if (token == 'rupyax') {
      this.options = {
        address: this.rupyaxAddress,
        symbol: this.rupyaxSymbol,
        decimals: this.rupyaxDecimals,
        image: this.rupyaxImage,
      };
    } else if (token == 'usdcx') {
      this.options = {
        address: this.usdcxAddress,
        symbol: this.usdcxSymbol,
        decimals: this.usdcxDecimals,
        image: this.usdcxImage,
      };
    }
    try {
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: this.options,
        },
      });

      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }
}
