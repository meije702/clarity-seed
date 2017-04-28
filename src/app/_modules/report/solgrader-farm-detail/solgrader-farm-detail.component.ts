import { PotatoDynamicdataService } from '../../masterdata/_services/potato-dynamicdata.service';
import { Farm } from '../../masterdata/_models/farm-filter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solgrader-farm-detail',
  templateUrl: './solgrader-farm-detail.component.html',
  styles: []
})
export class SolgraderFarmDetailComponent implements OnInit {
  @Input() farm: Farm;
  public loading: boolean;
  public sizeCatagories: Array<any> = ['0/28', '28/35', '35/50', '50/55', '55/+'];

  constructor(private potatoData: PotatoDynamicdataService) { }

    ngOnInit() {
        this.loading = true;
        // this.PotatoSamples = this.potatoData.getPotatoSamplesForPlot(this.plot);
        // this.avgPotatoCount = this.potatoData.getAvgPotatoCountFromSamples(this.PotatoSamples);
        // this.initGraph();
        this.loading = false;
    }

}
