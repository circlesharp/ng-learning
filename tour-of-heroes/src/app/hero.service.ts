import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

// * A provider is sth that can create or deliver a service;

// * A injector, is the object that is responsible for choosing and injecting
// * the provider where the application requires it.

@Injectable({
  // * When you provide the service at the root level,
  // * Angular creates a single, shared instance of HeroService
  // * and injects into any class that asks for it.
  providedIn: 'root',
})
export class HeroService {

  constructor(
    // * a typical "service-in-service" scenario
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Array<Hero>> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes.');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}.`);
    return of(hero);
  }
}
