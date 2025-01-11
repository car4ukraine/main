import {Component} from '@angular/core';
import {NgIcon, provideIcons} from "@ng-icons/core";
import {
  bootstrapFacebook,
  bootstrapGithub,
  bootstrapInstagram,
  bootstrapLinkedin
} from "@ng-icons/bootstrap-icons";


@Component({
  selector: 'app-contributors-section',
  standalone: true,
  templateUrl: './contributors-section.component.html',
  styleUrl: './contributors-section.component.scss',
  imports: [
    NgIcon
  ],
  viewProviders: [
    provideIcons({bootstrapFacebook, bootstrapLinkedin, bootstrapInstagram, bootstrapGithub}),
  ],
})
export class ContributorsSectionComponent {

  membersData: Array<{
    image: string;
    name: string;
    description: string;
    flag: string;
    icon: string;
    link: string;
  }> = [
    {
      "image": "assets/images/about/members/photo/RomanH.jpg",
      "name": "Roman Hapachylo",
      "description": "VP of Talents in IT but now brings bright minds together to create battle-ready trucks",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/roman-hapachylo-56668b3/"
    },
    {
      "image": "assets/images/about/members/photo/NazarK.jpg",
      "name": "Nazar Kravchuk",
      "description": "Project Manager in IT but now makes sure we buy trucks regularly all over the Europe and the UK",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/ivanoleksii/"
    },
    {
      "image": "assets/images/about/members/photo/IvanO.jpg",
      "name": "Ivan Oleksii",
      "description": "Partnerships manager in exports but now runs car4ukraine.com site to make sure the world supports Ukraine with trucks",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/ivanoleksii/"
    },
    {
      "image": "assets/images/about/members/photo/NikaO.jpg",
      "name": "Nika Ostratyuk",
      "description": "Producer and Film Director but now makes sure that all the soldiers who need trucks the most get them ASAP",
      "flag": "assets/images/about/members/flag/gb.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/nika.ostratyuk"
    },
    {
      "image": "assets/images/about/members/photo/OleksiiD.jpg",
      "name": "Oleksii Dovhaniuk",
      "description": "Creative Designer and Ever Learner but now illustrates and delivers the content at car4ukraine.com",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/oleksii.dovhaniuk"
    },
    {
      "image": "assets/images/about/members/photo/IvanK.jpg",
      "name": "Ivan Karbashevskyi ",
      "description": "Frontend Developer in IT but now does all he needs so the car4ukraine.com site is steady and running",
      "flag": "assets/images/about/members/flag/pl.svg",
      "icon": "bootstrapGithub",
      "link": "https://github.com/Karbashevskyi"
    },
    {
      "image": "assets/images/about/members/photo/NataliiaYa.jpg",
      "name": "Natalia Yakovenko",
      "description": "English Teacher but now communicates with the world through social media with cool reels",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapInstagram",
      "link": "https://www.instagram.com/nataly_ishere/"
    },
    {
      "image": "assets/images/about/members/photo/MykolaF.jpg",
      "name": "Mykola Fedyk",
      "description": "Senior DevOps but now catches the best trucks opportunities in Poland",
      "flag": "assets/images/about/members/flag/pl.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/profile.php?id=100000648979732"
    }
  ]
}
