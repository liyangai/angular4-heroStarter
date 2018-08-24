import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../heroes/hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers:[MessageService]
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private message:MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  hero:Hero
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  ngOnInit() {
    this.getHero();
    console.log(this);
    
    // setTimeout(() => {
    //   this.message.changeMes('detailllllllllll'+Math.random())
    // }, 3000);
  }



}
