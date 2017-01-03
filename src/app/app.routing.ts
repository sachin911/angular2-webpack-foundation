import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DisclosureComponent } from './components/primeNgDemo/disclosure.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'disclosure', component: DisclosureComponent}
];

export const routing = RouterModule.forRoot(routes);
