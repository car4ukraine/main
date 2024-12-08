import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-languages-page',
  templateUrl: './sitemap.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    RouterLink
  ],
  standalone: true
})
export class SitemapPage {

  public readonly sitemapList: {
    name: string;
    href: string;
  }[] = [
    {
      name: 'English (US)',
      href: '/'
    },
    {
      name: 'Dansk',
      href: '/da',
    },
    {
      name: 'Deutsch',
      href: '/de',
    },
    {
      name: 'Español',
      href: '/es',
    },
    {
      name: 'Français',
      href: '/fr',
    },
    {
      name: 'Norsk Bokmål',
      href: '/nb',
    },
    {
      name: 'Nederlands',
      href: '/nl',
    },
    {
      name: 'Polski',
      href: '/pl',
    },
    {
      name: 'Svenska',
      href: '/sv',
    }
  ];

}

export default SitemapPage;
