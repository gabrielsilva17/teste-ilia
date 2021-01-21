import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../service/pokemon.service';
import {Card} from '../model/Card';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  closeResult: string;
  card: Card;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getCard(this.route.snapshot.paramMap.get('id'))
      .subscribe(( data: Card[] )=>{
        this.card = data.card;
    });

  }

}
