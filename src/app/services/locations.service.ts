import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConstant } from '../constants/API.constants';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private urlApi = apiConstant.BASE_URL+'location/'

  constructor(private http:HttpClient) { }
  public getLocations(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
