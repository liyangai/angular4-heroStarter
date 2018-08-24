import { Injectable } from '@angular/core';
import { heros } from "./mock-hero";
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from "./heroes/hero";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes')
    // return of(heros);
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  private heroesUrl: string = 'api/heroes';
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  addHero(newHero:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, newHero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  private log(mess: string): void {
    this.messageService.add(mess);
  }
  constructor(
    private http: HttpClient, private messageService: MessageService) { }
}
