import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AppNavigationComponent} from "../app-navigation/app-navigation.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppNavigationComponent, NgOptimizedImage]
})
export class HeaderComponent {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
