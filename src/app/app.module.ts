import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DisclosureComponent } from './components/primeNgDemo/disclosure.component';
import { ApiService } from './services';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import {DataService} from './services/DataService';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule,DropdownModule} from 'primeng/primeng';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
	InputTextModule,
	DataTableModule,
	ButtonModule,
	DialogModule,
	DropdownModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
	DisclosureComponent
  ],
  providers: [
    ApiService,
	DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
