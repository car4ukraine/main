import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonatePageComponent } from './donate-page.component';
import { DonatePageRoutingModule } from './donate-page-routing.module';




@NgModule({
  declarations: [DonatePageComponent],
  imports: [
    CommonModule,
    DonatePageRoutingModule
  ]
})
export class DonatePageModule { }
