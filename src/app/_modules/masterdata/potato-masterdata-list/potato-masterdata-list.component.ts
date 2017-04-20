import { Component, OnInit } from '@angular/core';

import { PotatoMasterdataService } from '../_services/potato-masterdata.service';
import { Potato } from '../_models/potato';

@Component({
  selector: 'app-potato-masterdata-list',
  templateUrl: './potato-masterdata-list.component.html',
  styles: []
})
export class PotatoMasterdataListComponent implements OnInit {
  potatoes: Potato[];
  selectedPotatoes: Potato[];

  constructor(private potatoService: PotatoMasterdataService) { }

  ngOnInit() {
    this.potatoes = this.getPotatoes();
  }

  private getPotatoes(): Potato[] {
    return this.potatoService.getPotatoes();
  }

}
