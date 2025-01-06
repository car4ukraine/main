import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-media-about-us-section-component',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <div class="grid grid-cols-12 gap-4 max-w-[1330px] w-full">

      <div class="col-span-12">
        <div class="text-6xl font-bold font-tektur text-[#1F2125]">Media About Us</div>
      </div>
      <div class="col-span-6 font-tektur text-xl text-[#3D4650]">
        Every story published brings us one step closer to our shared  victory. Thank you!
      </div>
      <div class="col-span-12"></div>
      <div class="col-span-12 lg:col-span-5">
        <div class="w-full grid grid-cols-3 gap-4">
          @for (slide of slideListImage; track slide.url) {
            <a href="{{ slide.url }}" target="_blank" class="flex justify-center items-center bg-white">
              <!--                <img class="w-full h-[200px] rounded-lg" [src]="slide.image"/>-->
              <img class="w-[100px] h-[100px] mt-2" [src]="slide.logo"/>
            </a>
          }
        </div>
      </div>
      <div class="col-span-12 lg:col-span-7">
        <iframe  class="w-full h-[500px] rounded-lg" width="1330" height="366" src="https://www.youtube.com/embed/0ZBULtaRSMs?si=bEoElSnPX274PUvB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!--        <img class="w-full h-[500px] rounded-lg" src="https://via.placeholder.com/1330x366"/>-->
      </div>

    </div>

  `,
  host: {
    class: `w-full bg-[#EAECED] p-10 py-36 flex flex-col items-center justify-center`
  }
})
export class MediaAboutUsComponent {

  public slideListImage: Array<{
    image: string;
    logo: string;
    url: string;
  }> = [
    {
      image: '/assets/images/media/sky-news.jpg',
      logo: '/assets/images/media/sky-news.svg',
      url: 'https://www.youtube.com/watch?v=m9fJW0Zh_mM',
    }, {
      image: '/assets/images/media/insider.jpg',
      logo: '/assets/images/media/insider.svg',
      url: 'https://www.businessinsider.com/civilian-fords-and-toyotas-turned-into-battle-trucks-for-ukraines-forces-2022-6',
    }, {
      image: '/assets/images/media/cnn.jpg',
      logo: '/assets/images/media/cnn.svg',
      url: 'https://www.youtube.com/watch?v=0ZBULtaRSMs',
    }, {
      image: '/assets/images/media/the-telegraph.jpg',
      logo: '/assets/images/media/the-telegraph.svg',
      url: 'https://www.telegraph.co.uk/cars/features/british-farming-vehicles-turned-ukrainian-rocket-launchers/',
    }, {
      image: '/assets/images/media/newsweek.jpg',
      logo: '/assets/images/media/newsweek.svg',
      url: 'https://www.newsweek.com/ukrainian-fighters-using-crowdsourced-ford-rangers-armored-battle-1724417',
    }, {
      image: '/assets/images/media/the-independent.jpg',
      logo: '/assets/images/media/the-independent.svg',
      url: 'https://www.independent.co.uk/news/uk/ukraine-mitsubishi-b2245167.html',
    }, {
      image: '/assets/images/media/kyiv-post.jpg',
      logo: '/assets/images/media/kyiv-post.svg',
      url: 'https://www.kyivpost.com/ukraine-politics/volunteers-present-100th-refitted-vehicle-for-war-effort.html',
    }, {
      image: '/assets/images/media/tv2-denmark.jpg',
      logo: '/assets/images/media/tv2-denmark.svg',
      url: 'https://nyheder.tv2.dk/udland/2023-02-09-ukrainske-frivillige-forvandler-fredelige-firehjulstraekkere-til-doedbringende',
    },
    {
      image: '/assets/images/media/the-national.jpg',
      logo: '/assets/images/media/the-national.svg',
      url: 'https://www.thenationalnews.com/world/europe/2022/06/19/ukraine-crowdfunds-for-troops-with-appeals-for-drones-jets-and-off-road-jeeps/',
    },
    {
      image: '/assets/images/media/the-times.jpg',
      logo: '/assets/images/media/the-times.svg',
      url: 'https://www.thetimes.co.uk/article/sadiq-khan-urged-to-give-4x4s-scrapped-for-ulez-to-ukraine-pw92w878g',
    },
    {
      image: '/assets/images/media/yahoo-taiwan.jpg',
      logo: '/assets/images/media/yahoo-taiwan.svg',
      url: 'https://tw.news.yahoo.com/%E8%B2%A8%E5%8D%A1%E8%AE%8A%E6%88%B0%E8%BB%8A-car4ukraine-%E4%BB%96%E5%80%91%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%B9%E5%BC%8F%E7%82%BA%E7%83%8F%E5%85%8B%E8%98%AD%E8%80%8C%E6%88%B0-111417739.html',
    },
    {

      image: '/assets/images/media/insider-military.jpg',
      logo: '/assets/images/media/insider-military.svg',
      url: 'https://twitter.com/MilDefInsider/status/1535993540051931138',
    },
  ];

}
