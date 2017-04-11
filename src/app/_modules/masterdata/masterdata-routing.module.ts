import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterdataListComponent } from './masterdata-list/masterdata-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list',    component: MasterdataListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterdataRoutingModule { }
