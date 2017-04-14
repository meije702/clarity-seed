import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { MasterdataNavComponent } from './masterdata-nav/masterdata-nav.component';
import { PotatoMasterdataComponent } from './potato-masterdata/potato-masterdata.component';
import { FarmMasterdataComponent } from './farm-masterdata/farm-masterdata.component';
import { FieldMasterdataComponent } from './field-masterdata/field-masterdata.component';

@NgModule({
  imports: [
    CommonModule,
    MasterdataRoutingModule,
    ClarityModule
  ],
  declarations: [
    MasterdataNavComponent,
    PotatoMasterdataComponent,
    FarmMasterdataComponent,
    FieldMasterdataComponent
  ]
})
export class MasterdataModule { }
