import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Molecule } from './molecule.model';

@Injectable({
  providedIn: 'root'
})
export class MoleculeService {

  private urlSite = 'http://localhost:6022';

  constructor(private http: HttpClient) { }

  /*RRRR de CRUD */
  listeMolecules(): Observable<Molecule[]>{
    return this.http.get<Molecule[]>(`${this.urlSite}/allMolecules`);
  }
  /*CCCC de CRUD */
  createMolecule(moleculeAAjouter: object): Observable<object>{
    console.log(moleculeAAjouter);
    return this.http.post(`${this.urlSite}/ajoutMolecule`, moleculeAAjouter);
  }

}// Fin service 
