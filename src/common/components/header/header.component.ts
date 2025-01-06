import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AppNavigationComponent} from "../app-navigation/app-navigation.component";
import {DonateButtonComponent} from "../buttons/donate-button/donate-button.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppNavigationComponent, DonateButtonComponent, NgOptimizedImage]
})
export class HeaderComponent {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    console.log(this.isMenuOpen);
  }
}
