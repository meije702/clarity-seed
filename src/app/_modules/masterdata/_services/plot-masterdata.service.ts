import { forEach } from '@angular/router/src/utils/collection';
import { FARMS } from './mock-farm-masterdata';
import { Plot } from '../_models/plot';
import { Injectable } from '@angular/core';

@Injectable()
export class PlotMasterdataService {
  private allPlots: Plot[];

  constructor() {
    this.allPlots = new Array<Plot>();
   }

  getPlots(): Plot[] {
    if (this.allPlots.length < 1) {
      for (let farm of FARMS) {
        this.allPlots = this.allPlots.concat(farm.plots);
      }
    }
    return this.allPlots;
  }

}
