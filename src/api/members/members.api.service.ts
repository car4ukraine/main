import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMember} from "./i.member.response";

@Injectable({
  providedIn: 'root'
})
export class MembersApiService {

  private readonly endpoint: string = 'assets/members.json';

  private readonly httpClient = inject(HttpClient);

  public getMembers(): Observable<IMember[]> {
    return this.httpClient.get<IMember[]>(this.endpoint);
  }

}
