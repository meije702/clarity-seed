import { ChartsModule } from 'ng2-charts/charts/charts';
import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ReportRoutingModule } from './report-routing.module';
import { MasterdataModule } from '../masterdata/masterdata.module';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportNavComponent } from './report-nav/report-nav.component';
import { SolgraderReportComponent } from './solgrader-report/solgrader-report.component';
import { SolgraderPlotDetailComponent } from './solgrader-plot-detail/solgrader-plot-detail.component';
import { SolgraderFarmDetailComponent } from './solgrader-farm-detail/solgrader-farm-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    ReportRoutingModule,
    MasterdataModule,
    ClarityModule
  ],
  declarations: [ReportListComponent, ReportNavComponent, SolgraderReportComponent, SolgraderPlotDetailComponent, SolgraderFarmDetailComponent]
})
export class ReportModule { }
