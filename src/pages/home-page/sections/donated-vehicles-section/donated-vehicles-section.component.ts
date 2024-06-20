import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-donated-vehicles-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './donated-vehicles-section.component.html',
  styleUrl: './donated-vehicles-section.component.scss'
})
export class DonatedVehiclesSectionComponent {
[x: string]: any;
  public readonly title: string = 'Donated Vehicles';
  public readonly description: string = 'Dozens of people across EU, UK and the US have donated their cars or sold them to buy cars Ukrainian soldiers need right now. When we receive a car as a donation it saves us up to 75% of the cost per truck and all we have left to cover is logistics, armoring and maintenance. As of April 1, 2023 we have already received over 50 cars as a direct donation and this number keeps growing. Join!';
  public readonly assetsPath: string = '/assets/images/home/donated-vehicles/';
  public readonly imageTitle: string = 'Donated car(s)'
  public readonly images: Array<{
    src_v: string,
    title_v: string,
    alt_v: string,
    src_h: string,
    title_h: string,
    alt_h: string
  }> = [
    {
      src_v: "v-01.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-01.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-02.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-02.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-03.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-03.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-04.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-04.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-05.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-05.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-06.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-06.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-07.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-07.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-08.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-08.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-09.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-09.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-10.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-10.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
    {
      src_v: "v-11.jpg",
      title_v: "Donated car(s)",
      alt_v: "Donated car(s)",
      src_h: "h-11.jpg",
      title_h: "Donated car(s)",
      alt_h: "Donated car(s)"
    },
  ]
}
