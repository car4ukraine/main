import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../common/components/header/header.component';
import { FooterComponent } from '../common/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    'class': 'flex flex-col'
  }
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit() {
    console.log($localize`:@@appComponent.ngOnInit:App component initialized`);
  }

}
