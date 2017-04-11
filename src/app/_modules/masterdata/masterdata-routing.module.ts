import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterdataListComponent } from './masterdata-list/masterdata-list.component';
import { MasterdataNavComponent } from './masterdata-nav/masterdata-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MasterdataNavComponent,
    children: [
      { path: 'list', component: MasterdataListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
