import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../common/components/header/header.component';
import {FooterComponent} from '../common/components/footer/footer.component';
import {ScriptLoaderService} from "../common/cdk/script-loader.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header/>
    <router-outlet/>
    <app-footer/>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'flex flex-col'
  }
})
export class AppComponent implements OnInit {
  title = 'client';

  private readonly scriptLoaderService = inject(ScriptLoaderService);

  ngOnInit(): void {

    this.scriptLoaderService.loadScript(
      'https://donorbox.org/install-popup-button.js',
      'donorbox-popup-button-installer'
    );
    // this.scriptLoaderService.loadScript(
    //   'https://donorbox.org/widget.js',
    //   'donorbox-widget', {
    //     paypalExpress: 'false'
    //   }
    // );

  }


}
