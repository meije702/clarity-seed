import { POTATOES } from './mock-potato-masterdata';
import { Potato } from '../_models/potato';
import { Injectable } from '@angular/core';

@Injectable()
export class PotatoMasterdataService {

  constructor() { }

  getPotatoes(): Potato[] {
    return POTATOES;
  }

}
