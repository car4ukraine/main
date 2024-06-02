import { Component } from '@angular/core';
import { AppNavigationComponent } from "../app-navigation/app-navigation.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [AppNavigationComponent]
})
export class FooterComponent {

}
