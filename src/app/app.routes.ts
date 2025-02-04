import { Route } from '@angular/router';
import { AppComponent } from './app.component'; // Main page component
import { AboutComponent } from './about/about.component'; // About page component

export const routes: Route[] = [
  { path: '', component: AppComponent },  // Main page route
  { path: 'about', component: AboutComponent }  // About page route
];





