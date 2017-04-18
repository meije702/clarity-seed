/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', loadChildren: 'app/_modules/dashboard/dashboard.module#DashboardModule' },
    {path: 'report', loadChildren: 'app/_modules/report/report.module#ReportModule' },
    {path: 'masterdata', loadChildren: 'app/_modules/masterdata/masterdata.module#MasterdataModule' },
    {path: 'admin', loadChildren: 'app/_modules/admin/admin.module#AdminModule' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
