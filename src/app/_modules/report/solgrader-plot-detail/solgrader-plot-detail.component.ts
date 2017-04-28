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

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Potato growth' }
    ];

    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };

    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = false;
    public lineChartType = 'line';

    constructor(private potatoData: PotatoDynamicdataService) { }

    ngOnInit() {
        this.loading = true;
        this.PotatoSamples = this.potatoData.getPotatoSamplesForPlot(this.plot);
        this.avgPotatoCount = this.potatoData.getAvgPotatoCountFromSamples(this.PotatoSamples);
        this.initGraph();
        this.loading = false;
    }

    public initGraph(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        let _lineChartLabels: Array<any> = new Array(this.PotatoSamples.length);

        _lineChartData[0] = { data: new Array(this.PotatoSamples.length), label: this.plot.breed };
        for (let j = 0; j < this.lineChartData[0].data.length; j++) {
            if (this.PotatoSamples[j] != null) {
                _lineChartData[0].data[j] = this.PotatoSamples[j].photos[0].potatoes[0].width;
                _lineChartLabels[j] = this.PotatoSamples[j].timestamp;
            }
        }
        this.lineChartData = _lineChartData;
        this.lineChartLabels = _lineChartLabels;
    }

}
