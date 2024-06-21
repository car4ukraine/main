import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { AboutPageRoutingModule } from './about-page-routing.module';
import { HeroSectionComponent } from "./sections/hero-section/hero-section.component";



@NgModule({
    declarations: [AboutPageComponent],
    imports: [
        CommonModule,
        AboutPageRoutingModule,
        HeroSectionComponent
    ]
})
export class AboutPageModule { }
