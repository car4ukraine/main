import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
  ViewEncapsulation
} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "flex flex-col sm:flex-row"
  }
})
export class AppNavigationComponent {
  public readonly menuItemClicked = output();

  public onMenuItemClick() {
    this.menuItemClicked.emit();
  }

  public readonly tabs: Array<{
    name: string,
    href: string,
  }> = [
    {
      name: 'Home',
      href: './'
    },
    {
      name: 'About Us',
      href: './about'
    },
    {
      name: 'FAQ',
      href: './faq'
    },
    {
      name: 'Campaigns',
      href: './campaigns'
    },
    {
      name: 'Donate Car',
      href: './donate-car'
    },
    {
      name: 'Contact Us',
      href: './contact'
    }
  ]
}
