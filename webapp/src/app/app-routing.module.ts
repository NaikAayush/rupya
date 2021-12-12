import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOnboardingComponent } from './components/auth/auth-onboarding/auth-onboarding.component';
import { BorrowDashboardComponent } from './components/core/borrow/borrow-dashboard/borrow-dashboard.component';
import { BorrowRequestComponent } from './components/core/borrow/borrow-request/borrow-request.component';
import { LendDashboardComponent } from './components/core/lend/lend-dashboard/lend-dashboard.component';
import { StakeDashboardComponent } from './components/core/stake/stake-dashboard/stake-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configure', component: DashboardComponent },
  { path: 'profile/onboarding', component: AuthOnboardingComponent },
  { path: 'lend', component: LendDashboardComponent },
  { path: 'borrow', component: BorrowDashboardComponent },
  { path: 'borrow/new', component: BorrowRequestComponent },
  { path: 'stake', component: StakeDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
