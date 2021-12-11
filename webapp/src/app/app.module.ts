import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModalComponent } from './components/auth/auth-modal/auth-modal.component';
import { AuthOnboardingComponent } from './components/auth/auth-onboarding/auth-onboarding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LendDashboardComponent } from './components/core/lend/lend-dashboard/lend-dashboard.component';
import { StakeDashboardComponent } from './components/core/stake/stake-dashboard/stake-dashboard.component';
import { BorrowDashboardComponent } from './components/core/borrow/borrow-dashboard/borrow-dashboard.component';
import { LendPoolItemComponent } from './components/core/lend/lend-pool-item/lend-pool-item.component';
import { BorrowRequestComponent } from './components/core/borrow/borrow-request/borrow-request.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';
import { StakeLoansComponent } from './components/core/stake/stake-loans/stake-loans.component';
import { StakeLoansItemComponent } from './components/core/stake/stake-loans-item/stake-loans-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    DashboardComponent,
    HeaderComponent,
    AuthModalComponent,
    AuthOnboardingComponent,
    LendDashboardComponent,
    StakeDashboardComponent,
    BorrowDashboardComponent,
    LendPoolItemComponent,
    BorrowRequestComponent,
    LoaderComponent,
    ToastComponent,
    StakeLoansComponent,
    StakeLoansItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
