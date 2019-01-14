import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { from } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Fields
  selectedHero: Hero;
  heroes: Hero[];

  // Const
  constructor(private heroService: HeroService) { }

  // Methods
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
