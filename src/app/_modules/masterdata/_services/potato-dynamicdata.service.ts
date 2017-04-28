import { PotatoYield } from '../_models/potato-yield';
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
            sample.potatoYield = new PotatoYield();
            sample.potatoYield.sample = sample;
            sample.potatoYield.calculateYield();
            this.allPotatoSamples.push(sample);
          }
        }
      }
    }
  }

  public getPotatoSamples(): PotatoSample[] {
    return this.allPotatoSamples;
  }

  public getPotatoSamplesForPlot(plot: Plot): PotatoSample[] {
    return this.allPotatoSamples.filter(sample => sample.plot.id === plot.id);
  }

  public getAvgPotatoCountFromSamples(samples: PotatoSample[]): number {
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

  public getYieldforBreed(breed: string): PotatoYield {
    let samples: PotatoSample[] = this.allPotatoSamples.filter(sample => sample.plot.breed === breed);
    let potatoYield: PotatoYield = new PotatoYield();

    for (let sample of samples) {
      potatoYield.totalYield += sample.potatoYield.totalYield;
      for (let i = 0; i <= 5; i++) {
        potatoYield.yieldPerSize[i] = sample.potatoYield.yieldPerSize[i];
      }
    }

    potatoYield.totalYield = potatoYield.totalYield / samples.length;

    for (let i = 0; i <= 5; i++) {
      potatoYield.yieldPerSize[i] = potatoYield.yieldPerSize[i] / samples.length;
    }

    return potatoYield;
  }

}
