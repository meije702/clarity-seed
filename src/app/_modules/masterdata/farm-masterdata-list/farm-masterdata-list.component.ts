import { Component, OnInit } from '@angular/core';

import { FarmMasterdataService } from '../_services/farm-masterdata.service';
import { Farm } from '../_models/farm';

@Component({
  selector: 'app-farm-masterdata-list',
  templateUrl: './farm-masterdata-list.component.html',
  styles: []
})
export class FarmMasterdataListComponent implements OnInit {
  farms: Farm[]
  selectedFarms: Farm[]

  constructor(private farmService: FarmMasterdataService) { }

  ngOnInit() {
    this.farms = this.getFarms();
    console.log('read farms' + this.farms.length);
  }

  private getFarms() {
      return this.farmService.getFarms();
  }
}
