import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateCarPageComponent } from './donate-car-page.component';
import { DonateCarPageRoutingModule } from './donate-car-page-routing.module';



@NgModule({
  declarations: [DonateCarPageComponent],
  imports: [
    CommonModule,
    DonateCarPageRoutingModule
  ]
})
export class DonateCarPageModule { }
