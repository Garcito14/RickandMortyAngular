import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiConstant } from '../constants/API.constants';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private urlApi = apiConstant.BASE_URL+'episode/'

  constructor(private http:HttpClient) { }
  public getEpisode(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
