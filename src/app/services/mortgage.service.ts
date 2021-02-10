import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IMortgage } from '../models/mortgage';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  private baseUrl = `${environment.apiUrl}/mortgage`;

  constructor(private _http: HttpClient) {}

  public getMortgagePaymentList(): Observable<IMortgage[]> {
    return this._http.get<IMortgage[]>(`${this.baseUrl}/history`);
  }

  public createMorgage(mortgage: Partial<IMortgage>): Observable<number> {
    return this._http.post<number>(this.baseUrl, mortgage);
  }
}
