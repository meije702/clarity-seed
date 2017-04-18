import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ReportRoutingModule } from './report-routing.module';
import { MasterdataModule } from '../masterdata/masterdata.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportNavComponent } from './report-nav/report-nav.component';
import { SolgraderReportComponent } from './solgrader-report/solgrader-report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportRoutingModule,
    MasterdataModule,
    ClarityModule
  ],
  declarations: [ReportListComponent, ReportNavComponent, SolgraderReportComponent]
})
export class ReportModule { }
