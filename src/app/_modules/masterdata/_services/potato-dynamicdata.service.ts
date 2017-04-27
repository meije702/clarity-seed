import { forEach } from '@angular/router/src/utils/collection';
import { Plot } from '../_models/plot';
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

  getPotatoSamplesForPlot(plot: Plot): PotatoSample[] {
    return this.allPotatoSamples.filter(sample => sample.plot.id === plot.id);
  }

  getAvgPotatoCountFromSamples(samples: PotatoSample[]): number {
    let potatoCount = 0;
    let photoCount = 0;
    for (let sample of samples) {
      photoCount += sample.photos.length;
      for (let photo of sample.photos) {
        potatoCount += photo.potatoes.length;
      }
    }
    return photoCount > 0 ? potatoCount / photoCount : 0;
  }

}
