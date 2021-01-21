import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Card} from '../model/Card';
import {Result} from '../model/Result';

@Injectable({ providedIn: 'root' })

export class PokemonService {

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
    ) { }

    public getAll(): Promise<Card[]> {
      return this.http.get<Result>(`${environment.apiUrl}`)
        .toPromise()
        .then(
          data => {
            return data.cards;
          }
        );
    }

    public getCard(id: string) {
      return this.http.get(`${environment.apiUrl}/` + id);
    }

}
