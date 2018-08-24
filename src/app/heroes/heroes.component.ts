import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
// import { heros } from "../mock-hero";
// import { HeroService } from '../hero.service'; 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  Heros:Hero[]
  selectHero:Hero

  onSelect(hero : Hero):void{
    this.selectHero = hero
  }
  getHeros():void{
    // this.Heros = this.heroService.getHeroes()
    this.heroService.getHeroes().subscribe(heros=>this.Heros = heros)
  }

  add(name:string){
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.Heros.push(hero);
      });
  }
  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeros()
  }

}
