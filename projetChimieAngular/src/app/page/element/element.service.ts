import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from './element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private urlSite = 'http://localhost:6022';

  constructor(private http: HttpClient) { }

  /*RRRR de CRUD */
  listeElements(): Observable<Element[]>{
    return this.http.get<Element[]>(`${this.urlSite}/allElements`);
  }
  /*CCCC de CRUD */
  createElement(elementAAjouter: object): Observable<object>{
    console.log(elementAAjouter);
    return this.http.post(`${this.urlSite}/ajoutElement`, elementAAjouter);
  }

} //Fin Service
