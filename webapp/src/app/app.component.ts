import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'webapp';
  web3 = new Web3(environment.providerURL);
}
