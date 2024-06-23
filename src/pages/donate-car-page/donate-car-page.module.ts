import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateCarPageComponent } from './donate-car-page.component';
import { DonateCarPageRoutingModule } from './donate-car-page-routing.module';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";
import { VideosSectionComponent } from "./sections/videos-section/videos-section.component";
import { ContactSectionComponent } from "./sections/contact-section/contact-section.component";
import { FaqSectionComponent } from "./sections/faq-section/faq-section.component";



@NgModule({
    declarations: [DonateCarPageComponent],
    imports: [
        CommonModule,
        DonateCarPageRoutingModule,
        HeroSectionComponent,
        VideosSectionComponent,
        ContactSectionComponent,
        FaqSectionComponent
    ]
})
export class DonateCarPageModule { }
