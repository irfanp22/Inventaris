import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InventarisPageRoutingModule } from './inventaris-routing.module';

import { InventarisPage } from './inventaris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InventarisPageRoutingModule
  ],
  declarations: [InventarisPage]
})
export class InventarisPageModule { }
