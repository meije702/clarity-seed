import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardEditComponent } from './dashboard-edit/dashboard-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardNavComponent,
    children: [
      {
        path: 'list',
        component: DashboardListComponent
      },
      {
        path: 'edit',
        component: DashboardEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
