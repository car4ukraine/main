import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";
import { ContributorsSectionComponent } from "./sections/contributors-section/contributors-section.component";
import { NetworkSectionComponent } from "./sections/network-section/network-section.component";
import { JoinSectionComponent } from "./sections/join-section/join-section.component";



@NgModule({
    declarations: [AboutPageComponent],
    imports: [
        CommonModule,
        AboutPageRoutingModule,
        HeroSectionComponent,
        ContributorsSectionComponent,
        NetworkSectionComponent,
        JoinSectionComponent
    ]
})
export class AboutPageModule { }
