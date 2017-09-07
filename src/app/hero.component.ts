import { Component } from '@angular/core';
import {Hero} from './hero';
import{HeroService} from './hero.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})

export class HeroesComponent implements OnInit  {

  selectedHero: Hero;
  heroes : Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }
}