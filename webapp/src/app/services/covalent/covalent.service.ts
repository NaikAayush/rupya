import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovalentService {
  constructor(private http: HttpClient) {}

  async getUSDCTokenBalance() {
    const result: any = await this.http
      .get(
        'https://api.covalenthq.com/v1/80001/address/0xb15EB0764eb614f697df60778D27879d8CCbE086/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_7422c47165aa4b568adc9562ae1'
      )
      .toPromise();
    return result.data.items[0];
  }
}
