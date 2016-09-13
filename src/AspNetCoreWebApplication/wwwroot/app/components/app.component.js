//import { Component } from '@angular/core';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
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
//import { HeroService } from '../services/hero.service';
//import { HeroDetailComponent } from './hero-detail.component';
//import { HeroesComponent } from './heroes.component';
//import { DashboardComponent } from './dashboard.component';
//@Component({
//  selector: 'my-app',
//  styleUrls: ['app/styles/app.component.css'],
//  templateUrl: 'app/views/app.component.html',
//  directives: [ROUTER_DIRECTIVES],
//  providers: [ROUTER_PROVIDERS, HeroService]
//})
//@RouteConfig([
//  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
//  { path: '/heroes', name: 'Heroes', component: HeroesComponent },
//  { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
//])
//export class AppComponent {
//  title: string = "Tour of Heroes";
//  //constructor(private heroService: HeroService) { }
//}
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Tour of Heroes';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styleUrls: ['app/styles/app.component.css'],
        templateUrl: 'app/views/app.component.html'
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
