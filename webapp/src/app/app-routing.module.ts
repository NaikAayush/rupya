import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOnboardingComponent } from './components/auth/auth-onboarding/auth-onboarding.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configure', component: DashboardComponent },
  { path: 'auth/onboarding', component: AuthOnboardingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
