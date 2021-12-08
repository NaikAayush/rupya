import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { create } from 'ipfs-http-client';

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  constructor(private http: HttpClient) {}

  public connectToNetwork() {
    // return create();
    return create({
      host: environment.ipfsURL,
      port: 5001,
      protocol: 'https',
      headers: {
        authorization:
          'Basic ' +
          btoa(environment.ipfsProjectID + ':' + environment.ipfsProjectSecret),
      },
    });
  }

  public async uploadString(client: ReturnType<typeof create>, string: string) {
    return await client.add(string);
  }
}
