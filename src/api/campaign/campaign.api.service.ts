import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ICampaignResponse} from "./i.campaign.response";

@Injectable({
  providedIn: 'root'
})
export class CampaignApiService {

  public readonly endpoint: string = `http://api.car4ukraine.com:1337/api/campaigns`;

  private readonly httpClient = inject(HttpClient);

  public documents(): Observable<ICampaignResponse> {
    return this.httpClient.get<ICampaignResponse>(this.endpoint, {
      headers: {
        Authorization: `Bearer ${environment.api.token.backend}`
      }
    });
  }

}
