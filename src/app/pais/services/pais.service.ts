import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiurl: string = 'https://restcountries.com/v3.1';

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this._apiurl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this._apiurl}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  constructor(private http: HttpClient) {}
}
