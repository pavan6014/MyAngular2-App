import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';  

const appRoutes: Routes = [ 
   { path: 'dashboard', component: DashboardComponent },
   { path: 'faq', component: FaqComponent },
];  


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
