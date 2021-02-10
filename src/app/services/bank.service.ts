import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBank } from '../models/bank';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private baseUrl = `${environment.apiUrl}/bank`;

  constructor(private _http: HttpClient) {}

  public getBankById(id: string): Observable<IBank> {
    return this._http.get<IBank>(`${this.baseUrl}/${id}`);
  }

  public createBank(bank: Partial<IBank>): Observable<IBank> {
    return this._http.post<IBank>(this.baseUrl, bank);
  }

  public updateBank(id: string, bank: Partial<IBank>): Observable<IBank> {
    return this._http.patch<IBank>(`${this.baseUrl}/${id}`, bank);
  }

  public deleteBank(id: string): Observable<IBank> {
    return this._http.delete<IBank>(`${this.baseUrl}/${id}`);
  }

  public getBankList(): Observable<IBank[]> {
    return this._http.get<IBank[]>(`${this.baseUrl}/all`);
  }
}
