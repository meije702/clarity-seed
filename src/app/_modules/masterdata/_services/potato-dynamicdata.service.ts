import { FARMS } from './mock-farm-masterdata';
import { PotatoSample } from '../_models/potato-sample';
import { Injectable } from '@angular/core';

@Injectable()
export class PotatoDynamicdataService {
  private allPotatoSamples: PotatoSample[];

  constructor() {
    this.allPotatoSamples = new Array<PotatoSample>();
    this.initAllPotatoSamples();
  }

  private initAllPotatoSamples() {
    if (this.allPotatoSamples.length < 1) {
      for (let farm of FARMS) {
        for (let plot of farm.plots) {
          plot.farm = farm;
          for (let sample of plot.samples) {
            sample.plot = plot;
            this.allPotatoSamples.push(sample);
          }
        }
      }
    }
  }

  getPotatoSamples(): PotatoSample[] {
    return this.allPotatoSamples;
  }

}
