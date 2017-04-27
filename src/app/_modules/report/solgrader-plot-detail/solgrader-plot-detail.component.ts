import { PotatoSample } from '../../masterdata/_models/potato-sample';
import { PotatoDynamicdataService } from '../../masterdata/_services/potato-dynamicdata.service';
import { Plot } from '../../masterdata/_models/plot';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solgrader-plot-detail',
  templateUrl: './solgrader-plot-detail.component.html',
  styles: []
})
export class SolgraderPlotDetailComponent implements OnInit {
    @Input() plot: Plot;
    PotatoSamples: PotatoSample[];
    loading: boolean;
    avgPotatoCount: number;

    constructor(private potatoData: PotatoDynamicdataService) {}

    ngOnInit() {
        this.loading = true;
        this.PotatoSamples = this.potatoData.getPotatoSamplesForPlot(this.plot);
        this.avgPotatoCount = this.potatoData.getAvgPotatoCountFromSamples(this.PotatoSamples);
        this.loading = false;
    }

}
