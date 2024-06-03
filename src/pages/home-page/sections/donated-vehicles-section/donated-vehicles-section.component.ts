import { Component } from '@angular/core';

@Component({
  selector: 'app-donated-vehicles-section',
  standalone: true,
  imports: [],
  templateUrl: './donated-vehicles-section.component.html',
  styleUrl: './donated-vehicles-section.component.scss'
})
export class DonatedVehiclesSectionComponent {
  public readonly title: string = 'Donated Vehicles';
  public readonly description: string = 'Dozens of people across EU, UK and the US have donated their cars or sold them to buy cars Ukrainian soldiers need right now. When we receive a car as a donation it saves us up to 75% of the cost per truck and all we have left to cover is logistics, armoring and maintenance. As of April 1, 2023 we have already received over 50 cars as a direct donation and this number keeps growing. Join!';
}
