import { PotatoMasterdataService } from '../../masterdata/_services/potato-masterdata.service';
import { Potato } from '../../masterdata/_models/potato';
import { FarmMasterdataService } from '../../masterdata/_services/farm-masterdata.service';
import { Farm } from '../../masterdata/_models/farm';
import { PlotMasterdataService } from '../../masterdata/_services/plot-masterdata.service';
import { Plot } from '../../masterdata/_models/plot';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-solgrader-report',
  templateUrl: './solgrader-report.component.html',
  styles: []
})
export class SolgraderReportComponent implements OnInit {
  potatoes: Potato[]
  selectedPotatoes: Potato[] = [];
  farms: Farm[]
  selectedFarms: Farm[] = [];
  plots: Plot[];
  selectedPlots: Plot[] = [];

  constructor(
    private plotService: PlotMasterdataService,
    private farmService: FarmMasterdataService,
    private potatoService: PotatoMasterdataService) { }

  ngOnInit() {
    this.potatoes = this.getPotatoes();
    this.farms = this.getFarms();
    this.plots = this.getPlots();
  }

  public loadData() {
    this.potatoes = this.getPotatoes();
    this.farms = this.getFarms();
    this.plots = this.getPlots();
  }

  private getPotatoes() {
    return this.potatoService.getPotatoes();
  }

  private getFarms() {
    return this.farmService.getFarms();
  }

  private getPlots(): Plot[] {
    if (this.selectedFarms.length > 0) {
      return this.plotService.getPlotsForFarms(this.selectedFarms);
    } else {
      return this.plotService.getPlots();
    }
  }
}
