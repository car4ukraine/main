import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouPageComponent } from './thank-you-page.component';
import { ThankYouPageRoutingModule } from './thank-you-page-routing.module';



@NgModule({
  declarations: [ThankYouPageComponent],
  imports: [
    CommonModule,
    ThankYouPageRoutingModule
  ]
})
export class ThankYouPageModule { }
