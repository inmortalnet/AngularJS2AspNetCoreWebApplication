//import { Component } from '@angular/core';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

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

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    styleUrls: ['app/styles/app.component.css'],
    templateUrl: 'app/views/app.component.html'
})
export class AppComponent {
    title = 'Tour of Heroes';
}
