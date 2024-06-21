import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contributor',
  standalone: true,
  imports: [],
  templateUrl: './contributor.component.html',
  styleUrl: './contributor.component.scss'
})
export class ContributorComponent {
  public readonly assetsPath: string = '/assets/images/about/contributors/';
  @Input() public avatar!: string;
  @Input() public fullName!: string;
  @Input() public details!: string;
  @Input() public socialMedia!: Array<{
    icon: string,
    href: string,
    title: string
  }>
}
