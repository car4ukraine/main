import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { SpotlightSectionComponent } from "./sections/spotlight-section/spotlight-section.component";
import { StepsSectionComponent } from "./sections/steps-section/steps-section.component";
import { StoriesSectionComponent } from "./sections/stories-section/stories-section.component";
import { OngoingFundraiserSectionComponent } from "./sections/ongoing-fundraiser-section/ongoing-fundraiser-section.component";
import { DonatedVehiclesSectionComponent } from "./sections/donated-vehicles-section/donated-vehicles-section.component";
import { SocialMediaSectionComponent } from "./sections/social-media-section/social-media-section.component";



@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        HeroSectionComponent,
        SpotlightSectionComponent,
        StepsSectionComponent,
        StoriesSectionComponent,
        OngoingFundraiserSectionComponent,
        DonatedVehiclesSectionComponent,
        SocialMediaSectionComponent
    ]
})
export class HomePageModule { }
