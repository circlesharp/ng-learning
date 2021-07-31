import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
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
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    // * a typical "service-in-service" scenario
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getHeroes(): Observable<Array<Hero>> {
    return this.http
      .get<Array<Hero>>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(
          this.handleError<Hero[]>('getHeroes', []),
        )
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`)),
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero')),
      );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added here w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero')),
      );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero in=${id}`)),
        catchError(this.handleError<Hero>('deleteHero')),
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    const url = `${this.heroesUrl}/?name=${term}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        tap(x => {
          x.length
            ? this.log(`found heroes matching "${term}"`)
            : this.log(`no heroes matching "${term}"`);
        }),
        catchError(this.handleError<Hero[]>('searchHeroes', [])),
      );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
