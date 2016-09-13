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
const Subject_1 = require('rxjs/Subject');
const hero_search_service_1 = require('../services/hero-search.service');
let HeroSearchComponent = class HeroSearchComponent {
    constructor(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        //this.heroes = this.searchTerms
        //    .debounceTime(300)        // wait for 300ms pause in events
        //    .distinctUntilChanged()   // ignore if next search term is same as previous
        //    .switchMap(term => term   // switch to new observable each time
        //        // return the http search observable
        //        ? this.heroSearchService.search(term)
        //        // or the observable of empty heroes if no search term
        //        : Observable.of<Hero[]>([]))
        //    .catch(error => {
        //        // TODO: real error handling
        //        console.log(error);
        //        return Observable.of<Hero[]>([]);
        //    });
    }
    gotoDetail(hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
};
HeroSearchComponent = __decorate([
    core_1.Component({
        selector: 'hero-search',
        templateUrl: 'app/views/hero-search.component.html',
        styleUrls: ['app/styles/hero-search.component.css'],
        providers: [hero_search_service_1.HeroSearchService]
    }), 
    __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
], HeroSearchComponent);
exports.HeroSearchComponent = HeroSearchComponent;
