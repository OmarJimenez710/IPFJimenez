import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    HomeModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
