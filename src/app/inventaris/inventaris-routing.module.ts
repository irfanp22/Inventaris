import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventarisPage } from './inventaris.page';

const routes: Routes = [
  {
    path: '',
    component: InventarisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarisPageRoutingModule { }
