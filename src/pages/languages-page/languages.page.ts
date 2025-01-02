import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'app-languages-page',
  templateUrl: './languages.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class LanguagesPage {

  public readonly languageList: {
    name: string;
    href: string;
    code: string;
  }[] = [
    {
      name: 'English (US)',
      href: '/',
      code: 'en-US',
    },
    {
      name: 'Dansk',
      href: '/da',
      code: 'da'
    },
    {
      name: 'Deutsch',
      href: '/de',
      code: 'de'
    },
    {
      name: 'Español',
      href: '/es',
      code: 'es'
    },
    {
      name: 'Français',
      href: '/fr',
      code: 'fr'
    },
    {
      name: 'Norsk Bokmål',
      href: '/nb',
      code: 'nb'
    },
    {
      name: 'Nederlands',
      href: '/nl',
      code: 'nl'
    },
    {
      name: 'Polski',
      href: '/pl',
      code: 'pl'
    },
    {
      name: 'Svenska',
      href: '/sv',
      code: 'sv'
    }
  ];

}

export default LanguagesPage;
