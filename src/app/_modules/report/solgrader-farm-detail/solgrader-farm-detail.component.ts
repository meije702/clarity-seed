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

    // lineChart
    public lineChartData: Array<any> = [
        { data: [5, 10, 20, 10, 5, 0, 0], label: 'Yield Bintje 0/28' },
        { data: [0, 5, 10, 50, 10, 0, 5], label: 'Yield Bintje 28/55' },
        { data: [0, 0, 5, 10, 20, 10, 5], label: 'Yield Bintje 35/50' },
        { data: [0, 0, 0, 5, 15, 38, 40], label: 'Yield Bintje 50/55' },
        { data: [0, 0, 0, 10, 40, 58, 60], label: 'Yield Bintje 55/+' }
    ];

    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: false
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
        // this.PotatoSamples = this.potatoData.getPotatoSamplesForPlot(this.plot);
        // this.avgPotatoCount = this.potatoData.getAvgPotatoCountFromSamples(this.PotatoSamples);
        // this.initGraph();
        this.loading = false;
    }

}
