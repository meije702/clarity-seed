import { Potato } from '../../masterdata/_models/potato';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solgrader-potato-detail',
  templateUrl: './solgrader-potato-detail.component.html',
  styles: []
})
export class SolgraderPotatoDetailComponent implements OnInit {
 @Input() potato: Potato;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [23, 30, 40, 50, 55, 58, 60], label: 'Yield' }
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

  constructor() { }

  ngOnInit() {
  }

}
