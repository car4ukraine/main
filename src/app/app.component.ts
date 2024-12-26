import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../common/components/header/header.component';
import {FooterComponent} from '../common/components/footer/footer.component';

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
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    'class': 'flex flex-col'
  }
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit() {
  }

}
