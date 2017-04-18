import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solgrader-report',
  templateUrl: './solgrader-report.component.html',
  styles: []
})
export class SolgraderReportComponent implements OnInit {
  public filterFarms = true;
  public filterPotatoes = true;
  public filterPlots = false;

  constructor() { }

  ngOnInit() {
  }

}
