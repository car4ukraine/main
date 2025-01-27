import {Component} from '@angular/core';
import {NgIcon, provideIcons, provideNgIconsConfig} from "@ng-icons/core";
import {
  bootstrapFacebook,
  bootstrapGithub, bootstrapGlobe,
  bootstrapInstagram,
  bootstrapLinkedin,
  bootstrapTwitterX
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
    provideIcons({bootstrapFacebook, bootstrapLinkedin, bootstrapInstagram, bootstrapGithub, bootstrapTwitterX, bootstrapGlobe}),
    provideNgIconsConfig({

    }),
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
    },
    {
      "image": "assets/images/about/contributors/ClaireOelrichs.jpg",
      "name": "Claire Oelrichs",
      "description": "Australian vet and conservationist who is building a community of creators and streamers to help Ukraine",
      "flag": "assets/images/about/members/flag/as.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/claire.oelrichs/"
    },
    {
      "image": "assets/images/about/contributors/RichardLofthouse.jpg",
      "name": "Richard Lofthouse",
      "description": "Former professor of history at the university of Oxford, now a journalist who helps Car for Ukraine to grow in the UK",
      "flag": "assets/images/about/members/flag/gb.svg",
      "icon": "bootstrapTwitterX",
      "link": "https://x.com/richloft"
    },
    {
      "image": "assets/images/about/contributors/OleksandraChuchko.jpg",
      "name": "Oleksandra Chuchko",
      "description": "Director of Intellias Foundation for Change",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/chuchko/"
    },
    {
      "image": "assets/images/about/contributors/JoshuaJannik.jpg",
      "name": "Joshua Jannik",
      "description": "Creative Entrepreneur but now runs Car for Ukraien The Netherlands to raise funds and bring cars from The Netherlands",
      "flag": "assets/images/about/members/flag/nl.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/joshua.jannink"
    },
    {
      "image": "assets/images/about/contributors/MarianKapechun.jpg",
      "name": "Marian Kapechun",
      "description": "Evacuator Manipulator but now prepares every single truck to be mechanically ready to go to the battlefields",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/marian.kapechun"
    },
    {
      "image": "assets/images/about/contributors/KseniiaFrolova.jpg",
      "name": "Kseniia Frolova",
      "description": "Talent Manager Administrator but now checks where our trucks are and when we deliver them",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/kseniya-frolova-578507129"
    },
    {
      "image": "assets/images/about/contributors/NielsThormaehlen.jpg",
      "name": "Niels Thormaehlen",
      "description": "Auto expert but now runs give-care.org to raise funds and bring reliable German cars to Ukraine",
      "flag": "assets/images/about/members/flag/de.svg",
      "icon": "bootstrapGlobe",
      "link": "https://give-care.org/"
    },
    {
      "image": "assets/images/about/contributors/RomanSlipak.jpg",
      "name": "Roman Slipak",
      "description": "Professional driver but now has driven 100+ cars through the border and to the frontline",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/kubik.rubik.10"
    },
    {
      "image": "assets/images/about/contributors/AndreasKessler.jpg",
      "name": "Andreas Kessler",
      "description": "Entrepreneur who now helps with his expertise and resources to keep great project running.",
      "flag": "assets/images/about/members/flag/de.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/andreaskesslerka"
    },
    {
      "image": "assets/images/about/contributors/OrestKurash.jpg",
      "name": "Orest Kurash",
      "description": "Designer who now makes sure all our trucks look cool with encouraging stickers soldiers will be inspired by",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/orest.kyrash"
    },
    {
      "image": "assets/images/about/contributors/AntonAleksakha.jpg",
      "name": "Anton Aleksaha",
      "description": "Music Industry Line Producer but now communicates with the frontline to timely deliver the vehicles where they are needed",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/alexachaspace"
    },
    {
      "image": "assets/images/about/contributors/PatrickMcIntyre.jpg",
      "name": "Patrick McIntyre",
      "description": "Qualified Construction Engineer but now brings dozens and dozens of cars from the UK to all parts of Ukraine",
      "flag": "assets/images/about/members/flag/ir.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/patrick.mcintyre.56211"
    },
    {
      "image": "assets/images/about/contributors/PallePetersen.jpg",
      "name": "Palle Petersen",
      "description": "Army Veteran but now leads efforts to bring dozens of 4x4's from Denmark",
      "flag": "assets/images/about/members/flag/dk.svg",
      "icon": "bootstrapGlobe",
      "link": "https://www.tv2fyn.dk/fyn/palle-bruger-sin-fritid-paa-at-sende-biler-til-ukraine"
    },
    {
      "image": "assets/images/about/contributors/JuliaMarko.jpg",
      "name": "Julia Marko",
      "description": "News editor but now makes sure the voice is heard about what matters globally",
      "flag": "assets/images/about/members/flag/nl.svg",
      "icon": "bootstrapLinkedin",
      "link": "https://www.linkedin.com/in/julia-marko"
    },
    {
      "image": "assets/images/about/contributors/YaroslavDiman.jpg",
      "name": "Yaroslav Diman",
      "description": "Forging Designer but now designs how the most efficient and reliable armor should look",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/tvdgalmetal"
    },
    {
      "image": "assets/images/about/contributors/VasylDidukh.jpg",
      "name": "Vasyl Didukh",
      "description": "Professional welder but now puts armor onto the cars daily",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/profile.php?id=100010377253713"
    },
    {
      "image": "assets/images/about/contributors/AdamShaheen.jpg",
      "name": "Adam Shaheen",
      "description": "Producer and Movie Director but now assists Ukrainian soldiers both materially and mentally here in Ukraine",
      "flag": "assets/images/about/members/flag/us.svg",
      "icon": "bootstrapInstagram",
      "link": "https://www.instagram.com/adamtremaine/"
    },
    {
      "image": "assets/images/about/contributors/SerhiyVyhovskiy.jpg",
      "name": "Serhiy Vyhovskiy",
      "description": "Professional roofer who now puts his hands on developing and delivering new designs of machine gun mounts and turrets",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/SilverXl"
    },
    {
      "image": "assets/images/about/contributors/OleksandrVyhovanets.jpg",
      "name": "Oleksandr Vyhovanets",
      "description": "Creative Welder who assists welding team and brings positive emotions to the team",
      "flag": "assets/images/about/members/flag/ua.svg",
      "icon": "bootstrapFacebook",
      "link": "https://www.facebook.com/profile.php?id=100006502353363"
    },
  ];
}
