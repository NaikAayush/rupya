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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    DashboardComponent,
    HeaderComponent,
    AuthModalComponent,
    AuthOnboardingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
