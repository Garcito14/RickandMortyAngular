import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpecificCharacterService {


  private urlApi = 'https://rickandmortyapi.com/api/character/'

  constructor(private http:HttpClient) { }
  public getCharacter(íd:number): Observable<any>{
    return this.http.get<any>(this.urlApi+íd)
  }
}
