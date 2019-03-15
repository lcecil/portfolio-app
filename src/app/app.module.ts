import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './shared/panel/panel.component';
/** intro components */
import { HomeIntroComponent } from './intro/home-intro/home-intro.component';
import { InformationArchitectureIntroComponent } from './intro/information-architecture-intro/information-architecture-intro.component';
import { data } from './data';

const appRoutes: Routes = [
  { path: 'home', component: HomeIntroComponent, data: data.home },
  { path: 'information-architecture', component: InformationArchitectureIntroComponent, data: data.informationArchitecture },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeIntroComponent,
    InformationArchitectureIntroComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
