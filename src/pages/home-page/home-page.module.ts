import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { SpotlightSectionComponent } from "./sections/spotlight-section/spotlight-section.component";



@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        HeroSectionComponent,
        SpotlightSectionComponent
    ]
})
export class HomePageModule { }
