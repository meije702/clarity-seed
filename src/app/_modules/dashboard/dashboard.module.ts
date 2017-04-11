import { ClarityModule } from 'clarity-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClarityModule
  ],
  declarations: [DashboardListComponent]
})
export class DashboardModule {
}
