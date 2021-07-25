import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // component's CSS element selector
  templateUrl: './heroes.component.html', // the location of the component's template file
  styleUrls: ['./heroes.component.css'], // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero> = [];
  selectedHero?: Hero;

  constructor(
    // * When ng creates a HeroesComponent,
    // * the dependency injection system sets the heroService parameter
    // * to the singleton instance of HeroService
    private heroService: HeroService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }
}
