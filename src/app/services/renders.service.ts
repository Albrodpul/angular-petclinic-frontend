import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RendersService {

  renders: any;
  baseURL="https://api-renders.herokuapp.com/api/v1/renders";

  constructor(private http: HttpClient) { }

  public getRenders(): any {
    return this.http.get(this.baseURL);
  }

  public getRendersById(id): any{
    return this.http.get(this.baseURL+'?id='+id);
  }

  public postRender(newRender): any{
    return this.http.post(this.baseURL, newRender);
  }

  public deleteRender(idRender): any{
    return this.http.delete(this.baseURL+'/'+idRender);
  }
}
