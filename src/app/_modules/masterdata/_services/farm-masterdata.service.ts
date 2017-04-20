import { FARMS } from './mock-farm-masterdata';
import { Farm } from '../_models/farm';
import { Injectable } from '@angular/core';


@Injectable()
export class FarmMasterdataService {

  constructor() { }

  getFarms(): Farm[] {
    return FARMS;
  }

  // getSolGraderPlotsForAccount(account: SolGraderAccount): SolGraderPlot[] {
  //   return  SOLGRADERPLOTS.filter(e => e.account_id === account.id);
  // }
}
