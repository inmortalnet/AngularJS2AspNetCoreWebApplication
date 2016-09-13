//// Imports for loading and configuring the in-memory web api
//import { provide } from '@angular/core';
//import { XHRBackend } from '@angular/http';

//import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
//import { InMemoryDataService} from './services/in-memory-data.service';

//// Usual bootstrapping imports
//import { bootstrap } from '@angular/platform-browser-dynamic';
//import { HTTP_PROVIDERS } from '@angular/http';

//import { AppComponent } from './components/app.component';

//bootstrap(AppComponent, [
//  HTTP_PROVIDERS,
//  provide(XHRBackend, { useClass: InMemoryBackendService }), // in memory server
//  provide(SEED_DATA, { useClass: InMemoryDataService }) // in memory server data
//]);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
