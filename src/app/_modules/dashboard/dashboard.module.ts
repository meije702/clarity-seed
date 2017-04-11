import { ClarityModule } from 'clarity-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ClarityModule
  ],
  declarations: [DashboardListComponent, DashboardNavComponent, DashboardEditComponent]
})
export class DashboardModule {
}
