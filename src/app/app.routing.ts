import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


const appRutes:Routes = [
  {path:'AppComponent', component:AppComponent}
];


export const AppRoutingProviders:any[] = [];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRutes)