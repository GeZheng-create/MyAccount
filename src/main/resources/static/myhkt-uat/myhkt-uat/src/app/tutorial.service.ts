import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountPage } from './account/account.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl: string;
  private updUrl: string;
  private delUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = 'http://localhost:8080';
  }


  public getAll(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.baseUrl}/hello`);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  public updateAccount(alias, rid): Observable<any> {
    // return this.http.put(`${this.updUrl}/${id}`, data);
    return this.http.put(`${this.baseUrl}/update?ALIAS=${alias}&RID=${rid}`, alias);
  }

  public  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`this.baseUrl/delete/`);
  }
}