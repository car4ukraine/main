import { Component } from '@angular/core';



@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    imports: []
})
export class HeroSectionComponent {
  public readonly title: string = 'About Us'
  public readonly description: string = 'Our team has people from different industries with different backgrounds, but today we are united to serve our army. Today our men at the frontline require mobility, and we are here with over 50 volunteers to serve them and liberate our nation.'
  public readonly metrics: Array<{ 
    name: string, 
    value: number, 
    prefix: string, 
    postfix:string 
  }> = [
    {
      name: 'Cars Delivered',
      value: 417,
      prefix: '',
      postfix: ''
    },
    {
      name: 'Worth of Cars',
      value: 3.3,
      prefix: '$',
      postfix: 'M+'
    },
  ]
}
