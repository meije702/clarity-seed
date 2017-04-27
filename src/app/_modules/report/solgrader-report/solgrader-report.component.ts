import { PlotMasterdataService } from '../../masterdata/_services/plot-masterdata.service';
import { Plot } from '../../masterdata/_models/plot';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solgrader-report',
  templateUrl: './solgrader-report.component.html',
  styles: []
})
export class SolgraderReportComponent implements OnInit {
  plots: Plot[];
  selectedPlots: Plot[];

  constructor(private plotService: PlotMasterdataService) { }

  ngOnInit() {
    this.plots = this.getPlots();
  }

  private getPlots(): Plot[] {
      return this.plotService.getPlots();
  }
}
