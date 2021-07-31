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

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.heroService
      .addHero({ name } as Hero) /* a Hero-like object just misses the id */
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.heroService.deleteHero(hero.id)
      .subscribe(); // ! Don't neglect the subscribe
  }
}
