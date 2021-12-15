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

  async getEvent() {
    const result: any = await this.http
      .get(
        'https://api.covalenthq.com/v1/80001/events/address/0x8FAd3Ccc1573Db9F8b021842DA662C5f872cC420/?quote-currency=USD&format=JSON&starting-block=22514105&ending-block=latest&key=ckey_docs'
      )
      .toPromise();
    return result.data.items[0];
  }
  async getLoans() {
    const result: any = await this.http
      .get(
        'https://api.covalenthq.com/v1/80001/events/topics/0x769845dbb156181faaf79058d46735251c58a1933bf7cc8e5fe7edfc3ae515ff/?quote-currency=USD&format=JSON&starting-block=22514105&ending-block=latest&key=ckey_7422c47165aa4b568adc9562ae1'
      )
      .toPromise();
    return result.data.items;
  }
  topicHash =
    '0x769845dbb156181faaf79058d46735251c58a1933bf7cc8e5fe7edfc3ae515ff';
}
