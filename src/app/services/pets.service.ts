import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  renders: any;
  baseURL="http://localhost:8081/api/v1/owners";

  constructor(private http: HttpClient) { }

  public getOwners(): any {
    return this.http.get(this.baseURL);
  }
}
