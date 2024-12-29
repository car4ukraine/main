import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {

  public readonly endpoint: string = `${environment.hostContacts}?spreadsheetId=1GcK_Kc7H6UdPvsK1MlmIsk39nOVWrVRBFCIHfrt6ZrY&range=contacts`;

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public postDocument(body: string): Observable<Object> {
    return this.httpClient.post(this.endpoint, body);
  }

}
