import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConstant } from '../constants/API.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = apiConstant.BASE_URL+'character/'

  constructor(private http:HttpClient) { }
  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi)
  }
}
