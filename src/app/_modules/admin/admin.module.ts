import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule
  ],
  declarations: [AdminNavComponent]
})
export class AdminModule { }
