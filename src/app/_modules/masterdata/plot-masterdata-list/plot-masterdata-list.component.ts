import { Component, OnInit } from '@angular/core';

import { PlotMasterdataService } from '../_services/plot-masterdata.service';
import { Plot } from '../_models/plot';

@Component({
  selector: 'app-plot-masterdata-list',
  templateUrl: './plot-masterdata-list.component.html',
  styles: []
})
export class PlotMasterdataListComponent implements OnInit {
  plots: Plot[];
  selectedPlots: Plot[];

  constructor(private plotService: PlotMasterdataService) { }

  ngOnInit() {
    this.plots = this.getPlots();
  }

  private getPlots(): Plot[]{
      return this.plotService.getPlots();
  }

}
