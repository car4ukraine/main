import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AppNavigationComponent} from "../app-navigation/app-navigation.component";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroLanguage} from "@ng-icons/heroicons/outline";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MainDonateButtonComponent} from "../buttons/main-donate-button/main-donate-button.component";
import {DonateCarButtonComponent} from "../../../pages/home-page/buttons/donate-car-button/donate-car-button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppNavigationComponent,
    NgIconComponent,
    RouterLink,
    NgOptimizedImage,
    MainDonateButtonComponent,
    DonateCarButtonComponent
  ],
  viewProviders: [
    provideIcons({
      heroLanguage
    })
  ]
})
export class FooterComponent {

 infoMail = 'info@car4ukraine.com'

}
