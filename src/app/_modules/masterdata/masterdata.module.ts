import { PotatoMasterdataService } from './_services/potato-masterdata.service';
import { PlotMasterdataService } from './_services/plot-masterdata.service';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterdataRoutingModule } from './masterdata-routing.module';
import { MasterdataNavComponent } from './masterdata-nav/masterdata-nav.component';
import { PotatoMasterdataComponent } from './potato-masterdata/potato-masterdata.component';
import { FarmMasterdataComponent } from './farm-masterdata/farm-masterdata.component';
import { FarmMasterdataListComponent } from './farm-masterdata-list/farm-masterdata-list.component';
import { FarmMasterdataFilterComponent } from './farm-masterdata-filter/farm-masterdata-filter.component';
import { PotatoMasterdataFilterComponent } from './potato-masterdata-filter/potato-masterdata-filter.component';
import { PotatoMasterdataListComponent } from './potato-masterdata-list/potato-masterdata-list.component';
import { PlotMasterdataComponent } from './plot-masterdata/plot-masterdata.component';
import { PlotMasterdataFilterComponent } from './plot-masterdata-filter/plot-masterdata-filter.component';
import { PlotMasterdataListComponent } from './plot-masterdata-list/plot-masterdata-list.component';
import { DeviceMasterdataComponent } from './device-masterdata/device-masterdata.component';
import { DeviceMasterdataFilterComponent } from './device-masterdata-filter/device-masterdata-filter.component';
import { DeviceMasterdataListComponent } from './device-masterdata-list/device-masterdata-list.component';
import { FarmMasterdataService } from './_services/farm-masterdata.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    MasterdataRoutingModule
  ],
  declarations: [
    MasterdataNavComponent,
    PotatoMasterdataComponent,
    FarmMasterdataComponent,
    FarmMasterdataListComponent,
    FarmMasterdataFilterComponent,
    PotatoMasterdataFilterComponent,
    PotatoMasterdataListComponent,
    PlotMasterdataComponent,
    PlotMasterdataFilterComponent,
    PlotMasterdataListComponent,
    DeviceMasterdataComponent,
    DeviceMasterdataFilterComponent,
    DeviceMasterdataListComponent
  ],
  exports: [
    FarmMasterdataFilterComponent,
    PotatoMasterdataFilterComponent,
    PlotMasterdataFilterComponent
  ],
  providers: [
    FarmMasterdataService,
    PlotMasterdataService,
    PotatoMasterdataService
  ]
})
export class MasterdataModule { }
