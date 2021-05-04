import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTechnologiesComponent } from './home-technologies/home-technologies.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { HomeEducationComponent } from './home-education/home-education.component';
import { NguCarouselModule } from '@ngu/carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeTechnologiesComponent,
    HomeIntroComponent,
    HomePersonalComponent,
    HomeEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
