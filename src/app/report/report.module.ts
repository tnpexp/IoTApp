import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { IonicModule } from '@ionic/angular';

import { ReportPage } from './report.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule, MatCheckboxModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  declarations: [ReportPage]
})
export class ReportPageModule {}
