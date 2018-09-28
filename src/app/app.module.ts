import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';

const appRoutes: Routes = [
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
