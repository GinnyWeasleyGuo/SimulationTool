import { Component } from '@angular/core';
import {Hero} from './hero';
import{HeroService} from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent  {
  title = 'Simulation Tool';
  selectedHero: Hero;
  heroes : Hero[];
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

  constructor(private heroService: HeroService) { 
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
}

