import { Component } from '@angular/core';

@Component({
    selector: 'app-contributors-section',
    standalone: true,
    templateUrl: './contributors-section.component.html',
    styleUrl: './contributors-section.component.scss',
    imports: []
})
export class ContributorsSectionComponent {
[x: string]: any;
  public readonly title: string = 'Our Team';
  public readonly assetsPath: string = '/assets/images/about/contributors/';
  public readonly team: Array<{
    avatar: string;
    fullName: string;
    details: string;
    socialMedia: Array<{
      icon: string;
      href: string;
      title: string
    }>
  }> = [
    {
      avatar: 'AdamShaheen.jpg',
      fullName: 'Adam Shaheen',
      details: 'Loream asdasfiopj asp oiasjp aosfn apofj  asf nasjf',
      socialMedia: [
        {
          icon: '',
          href: '',
          title: ''
        }
      ]
    },
    {
      avatar: 'AdamShaheen.jpg',
      fullName: 'Adam Shaheen',
      details: 'Loream asdasfiopj asp oiasjp aosfn apofj  asf nasjf',
      socialMedia: [
        {
          icon: '',
          href: '',
          title: ''
        }
      ]
    },
    {
      avatar: 'AdamShaheen.jpg',
      fullName: 'Adam Shaheen',
      details: 'Loream asdasfiopj asp oiasjp aosfn apofj  asf nasjf',
      socialMedia: [
        {
          icon: '',
          href: '',
          title: ''
        }
      ]
    },
    {
      avatar: 'AdamShaheen.jpg',
      fullName: 'Adam Shaheen',
      details: 'Loream asdasfiopj asp oiasjp aosfn apofj  asf nasjf',
      socialMedia: [
        {
          icon: '',
          href: '',
          title: ''
        }
      ]
    },
  ];
}
