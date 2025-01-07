import { Component } from '@angular/core';
import {YouTubePlayer} from "@angular/youtube-player";

@Component({
  selector: 'app-videos-section',
  standalone: true,
  imports: [
    YouTubePlayer
  ],
  templateUrl: './videos-section.component.html',
  styleUrl: './videos-section.component.scss'
})
export class VideosSectionComponent {
  public readonly title: string = 'Videos About Donated Cars';
  public readonly learnMoreLabel: string = 'Learn more';
  public readonly learnMoreTitle: string = ' learn more link';
  public readonly donateCarLabel: string = 'Donate car';
  public readonly donateCarTitle: string = 'Redirect to donate car page';
  public readonly assetsPath: string = '/assets/images/home/stories/';
  public readonly stories: Array<{
    title: string,
    details: string,
    href: string,
    iframe: string,
    image: string
  }> = [
    {
      title: 'Adam from USA',
      details: 'Adam always wanted to help Ukraine with a tangible donation. In February 2023, he came to Donbas and personally donated two trucks to soldiers.',
      href: 'https://www.youtube.com/watch?v=z8pCibdfCkY',
      iframe: '',
      image: '1-adam.jpg',
    },
    {
      title: 'Martin Buhr - Vacation in Ukraine',
      details: 'Excited to help Ukraine firsthand, Martin spent his September 2023 vacation bringing a truck to aid in demining efforts.',
      href: 'https://tallmartin.substack.com/p/coda-my-truck-heads-to-the-russo?utm_source=profile&utm_medium=reader2',
      iframe: '',
      image: '2-martin-buhr.jpg'
    },
    {
      title: 'British Business Bought us Truck',
      details: 'UK\'s SUV Prestige dealership purchased an L200 pickup, organized a volunteer convoy to Lviv, and toured shops and the city, creating a compelling story.',
      href: 'https://www.youtube.com/watch?v=G6rE1wfWpT8',
      iframe: '',
      image: '3-british-business.jpg'
    },
    {
      title: 'Edward and Hugh from South Africa',
      details: 'Born in South Africa and raised in a British-Canadian community, Edward and Hugh personally brought a pickup truck that now defends Ukraine in the East.',
      href: 'https://twitter.com/carforukraine/status/1743748880808779951',
      iframe: '',
      image: '4-edward-and-hugh.jpg'
    }
  ];
}
