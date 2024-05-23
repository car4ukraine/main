import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './app-navigation.component.html',
  styleUrl: './app-navigation.component.scss'
})
export class AppNavigationComponent {
  public readonly tabs: Array<{
    name: string,
    href: string,
  }> = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Donate Car',
      href: '/donate-car'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'FAQ',
      href: '/faq'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ]
}
