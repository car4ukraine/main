import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './app-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "flex flex-col sm:flex-row"
  }
})
export class AppNavigationComponent {
  public readonly tabs: Array<{
    name: string,
    href: string,
  }> = [
    {
      name: 'Home',
      href: './'
    },
    {
      name: 'Donate Car',
      href: './donate-car'
    },
    {
      name: 'About',
      href: './about'
    },
    {
      name: 'FAQ',
      href: './faq'
    },
    {
      name: 'Contact',
      href: './contact'
    }
  ]
}
