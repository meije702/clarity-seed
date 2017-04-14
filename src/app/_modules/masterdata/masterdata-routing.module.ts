
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterdataNavComponent } from './masterdata-nav/masterdata-nav.component';
import { PotatoMasterdataComponent } from './potato-masterdata/potato-masterdata.component';
import { FarmMasterdataComponent } from './farm-masterdata/farm-masterdata.component';


const routes: Routes = [
  {
    path: '',
    component: MasterdataNavComponent,
    children: [
      { path: 'Potato', component: PotatoMasterdataComponent },
      { path: 'Farm', component: FarmMasterdataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
