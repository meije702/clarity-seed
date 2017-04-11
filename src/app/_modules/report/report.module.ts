import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportListComponent } from './report-list/report-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    ClarityModule
  ],
  declarations: [ReportListComponent]
})
export class ReportModule { }
