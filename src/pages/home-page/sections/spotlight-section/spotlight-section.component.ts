import { Component } from '@angular/core';

@Component({
  selector: 'app-spotlight-section',
  standalone: true,
  imports: [],
  templateUrl: './spotlight-section.component.html',
  styleUrl: './spotlight-section.component.scss'
})
export class SpotlightSectionComponent {
  public readonly organizationName: string = 'Car for Ukraine';
  public readonly linkingWord: string = ' in ';
  public readonly assetsPath: string = '/assets/images/home/spotlight/';
  public readonly news: Array<{
    title: string;
    logo: string;
    href: string;
  }> = [
    {
      title: 'Sky News',
      logo: 'sky-news.svg',
      href: 'https://www.youtube.com/watch?v=m9fJW0Zh_mM',
    }, {
      title: 'Insider',
      logo: 'insider.svg',
      href: 'https://www.businessinsider.com/civilian-fords-and-toyotas-turned-into-battle-trucks-for-ukraines-forces-2022-6',
    }, {
      title: 'CNN',
      logo: 'cnn.svg',
      href: 'https://www.youtube.com/watch?v=0ZBULtaRSMs',
    }, {
      title: 'The Telegraph',
      logo: 'the-telegraph.svg',
      href: 'https://www.telegraph.co.uk/cars/features/british-farming-vehicles-turned-ukrainian-rocket-launchers/',
    }, {
      title: 'Newsweek',
      logo: 'newsweek.svg',
      href: 'https://www.newsweek.com/ukrainian-fighters-using-crowdsourced-ford-rangers-armored-battle-1724417',
    }, {
      title: 'The Independent',
      logo: 'the-independent.svg',
      href: 'https://www.independent.co.uk/news/uk/ukraine-mitsubishi-b2245167.html',
    }, {
      title: 'Kyiv Post',
      logo: 'kyiv-post.svg',
      href: 'https://www.kyivpost.com/ukraine-politics/volunteers-present-100th-refitted-vehicle-for-war-effort.html',
    }, 
    {
      title: 'TV2 Denmark',
      logo: 'tv2-denmark.svg',
      href: 'https://nyheder.tv2.dk/udland/2023-02-09-ukrainske-frivillige-forvandler-fredelige-firehjulstraekkere-til-doedbringende',
    },
    {
      title: 'The National',
      logo: 'the-national.svg',
      href: 'https://www.thenationalnews.com/world/europe/2022/06/19/ukraine-crowdfunds-for-troops-with-appeals-for-drones-jets-and-off-road-jeeps/',
    },
    {
      title: 'The Times',
      logo: 'the-times.svg',
      href: 'https://www.thetimes.co.uk/article/sadiq-khan-urged-to-give-4x4s-scrapped-for-ulez-to-ukraine-pw92w878g',
    },
    {
      title: 'Yahoo Taiwan',
      logo: 'yahoo-taiwan.svg',
      href: 'https://tw.news.yahoo.com/%E8%B2%A8%E5%8D%A1%E8%AE%8A%E6%88%B0%E8%BB%8A-car4ukraine-%E4%BB%96%E5%80%91%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B9%E5%BC%8F%E7%82%BA%E7%83%8F%E5%85%8B%E8%98%AD%E8%80%8C%E6%88%B0-111417739.html',
    },
    {

      title: 'Military and Defence Insider',
      logo: 'insider-military.svg',
      href: 'https://twitter.com/MilDefInsider/status/1535993540051931138',
    },
  ];
}
