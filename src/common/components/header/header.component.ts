import { Component } from '@angular/core';
import { AppNavigationComponent } from "../app-navigation/app-navigation.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AppNavigationComponent]
})
export class HeaderComponent {

}
