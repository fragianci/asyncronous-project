import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  BASE_URL = 'https://pokeapi.co/api/v2';
  constructor(
    private readonly http: HttpClient,
  ) { }

  get(path: string) {
    return this.http.get<any[]>(`${this.BASE_URL}/${path}`);
  }
}
