import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { MasterdataListComponent } from './masterdata-list/masterdata-list.component';
import { MasterdataNavComponent } from './masterdata-nav/masterdata-nav.component';

@NgModule({
  imports: [
    CommonModule,
    MasterdataRoutingModule,
    ClarityModule
  ],
  declarations: [MasterdataListComponent, MasterdataNavComponent]
})
export class MasterdataModule { }
