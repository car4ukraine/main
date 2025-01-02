import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AppNavigationComponent} from "../app-navigation/app-navigation.component";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroLanguage} from "@ng-icons/heroicons/outline";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppNavigationComponent,
    NgIconComponent,
    RouterLink
  ],
  viewProviders: [
    provideIcons({
      heroLanguage
    })
  ]
})
export class FooterComponent {

}
