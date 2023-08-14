import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private urlApi = 'https://rickandmortyapi.com/api/location/'

  constructor(private http:HttpClient) { }
  public getLocations(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
