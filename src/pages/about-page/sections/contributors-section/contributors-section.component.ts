import {Component, OnInit} from '@angular/core';
import {MembersApiService} from "../../../../api/members/members.api.service";
import {IMember} from "../../../../api/members/i.member.response";
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
export class ContributorsSectionComponent implements OnInit {

  membersData: IMember[] = [];
  constructor(
    private members: MembersApiService
  ) {}

  ngOnInit() {
    this.getMembersInfo()
  }

  getMembersInfo() {
    this.members.getMembers().subscribe(res => {
      this.membersData = res;
    })
  }
}
