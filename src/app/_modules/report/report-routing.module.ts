import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportNavComponent } from './report-nav/report-nav.component';
import { ReportListComponent } from './report-list/report-list.component';
import { SolgraderReportComponent } from './solgrader-report/solgrader-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportNavComponent,
    children: [
      { path: 'solgrader', component: SolgraderReportComponent },
      { path: 'solantenna', component: ReportListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
