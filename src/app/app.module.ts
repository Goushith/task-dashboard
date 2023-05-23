import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    DashboardComponent,
    RightNavComponent,
    TeacherdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
