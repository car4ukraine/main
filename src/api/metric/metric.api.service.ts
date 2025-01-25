import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {IMetricResponse} from "./i.metric.response";

@Injectable({
  providedIn: 'root'
})
export class MetricApiService {

  public readonly endpoint: string = `https://api.car4ukraine.com/api/metric`;

  private readonly httpClient = inject(HttpClient);

  public execute(): Observable<IMetricResponse> {
    return this.httpClient.get<IMetricResponse>(this.endpoint, {
      headers: {
        Authorization: `Bearer ${environment.api.token.backend}`
      },
      params: {
        populate: '*'
      }
    });
  }

}
