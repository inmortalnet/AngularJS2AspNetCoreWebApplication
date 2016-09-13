"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const hero_service_1 = require('../services/hero.service');
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    save() {
        this.heroService.update(this.hero)
            .then(this.goBack);
    }
    goBack() {
        window.history.back();
    }
};
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/views/hero-detail.component.html',
        styleUrls: ['app/styles/hero-detail.component.css']
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
