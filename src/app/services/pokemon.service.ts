import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private apiService: ApiServiceService,
  ) { }

  getPokemon(path: string) {
    return this.apiService.get(path);
  }
}
