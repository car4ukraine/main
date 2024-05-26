import { Component } from '@angular/core';
import { AppNavigationComponent } from "../app-navigation/app-navigation.component";
import { DonateButtonComponent } from "../buttons/donate-button/donate-button.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AppNavigationComponent, DonateButtonComponent]
})
export class HeaderComponent {

}
