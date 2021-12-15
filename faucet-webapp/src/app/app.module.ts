import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletConnectComponent } from './components/wallet-connect/wallet-connect.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaucetComponent } from './components/faucet/faucet.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletConnectComponent,
    NavbarComponent,
    FaucetComponent,
    LoaderComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
