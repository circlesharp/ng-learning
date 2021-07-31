import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//The user should be able to get to these details in three ways.

// 1. By clicking a hero in the dashboard.
// 2. By clicking a hero in the heroes list.
// 3. By pasting a "deep link" URL into the browser address bar that identifies the hero to display.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute, // * holds information about the route.
    private heroService: HeroService,
    private location: Location, // * ng service for interacting with the browser.
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // * route.snapshot is a static image of the route information shortly after the component was created.
    // * paramMap is a dictionary of route parameter values extracted from the URL.
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService
      .getHero(id)
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
