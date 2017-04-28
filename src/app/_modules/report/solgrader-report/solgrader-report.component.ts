import { FarmMasterdataService } from '../../masterdata/_services/farm-masterdata.service';
import { Farm } from '../../masterdata/_models/farm';
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
  selectedPlots: Plot[] = [];
  farms: Farm[]
  selectedFarms: Farm[] = [];

  constructor(
      private plotService: PlotMasterdataService,
      private farmService: FarmMasterdataService) { }

  ngOnInit() {
    this.farms = this.getFarms();
    this.plots = this.getPlots();
  }

  private getFarms() {
      return this.farmService.getFarms();
  }

  private getPlots(): Plot[] {
    return this.plotService.getPlots();
  }
}
