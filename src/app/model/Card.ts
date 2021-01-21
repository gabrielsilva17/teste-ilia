import {Attack} from './Attack';
import {Weakness} from './Weakness';
import {Resistance} from './Resistance';

export interface Card {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string [];
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Attack[];
  weaknesses: Weakness [];
  resistances: Resistance[];
}
