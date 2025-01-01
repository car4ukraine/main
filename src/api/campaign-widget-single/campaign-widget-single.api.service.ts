import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ICampaignWidgetSingleResponse} from "./i.campaign-widget-single.response";

@Injectable({
  providedIn: 'root'
})
export class CampaignWidgetSingleApiService {

  public readonly endpoint: string = `https://api.car4ukraine.com/api/campaign-widget-singles`;

  private readonly httpClient = inject(HttpClient);

  public documents(): Observable<ICampaignWidgetSingleResponse> {
    return this.httpClient.get<ICampaignWidgetSingleResponse>(this.endpoint, {
      headers: {
        Authorization: `Bearer ${environment.api.token.backend}`
      },
      params: {
        populate: '*'
      }
    });
  }

}
