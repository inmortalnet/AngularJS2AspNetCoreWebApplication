"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./components/dashboard.component');
const heroes_component_1 = require('./components/heroes.component');
const hero_detail_component_1 = require('./components/hero-detail.component');
const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
