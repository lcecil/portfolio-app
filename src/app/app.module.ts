import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { data } from './data';

/** shared components */
import { PanelComponent } from './shared/panel/panel.component';

/** intro components */
import { HomeIntroComponent } from './intro/home-intro/home-intro.component';
import { InformationArchitectureIntroComponent } from './intro/information-architecture-intro/information-architecture-intro.component';
import { ResearchMethodsIntroComponent } from './intro/research-methods-intro/research-methods-intro.component';
import { VisualDesignsIntroComponent } from './intro/visual-designs-intro/visual-designs-intro.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeIntroComponent, data: data.home },
  { path: 'information-architecture', component: InformationArchitectureIntroComponent, data: data.informationArchitecture },
  { path: 'research-methods', component: ResearchMethodsIntroComponent, data: data.researchMethods },
  { path: 'visual-designs', component: VisualDesignsIntroComponent, data: data.visualDesigns },
  {
    path: '',
    redirectTo: '/', // TODO: send to /home and update theme
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    HomeIntroComponent,
    InformationArchitectureIntroComponent,
    ResearchMethodsIntroComponent,
    VisualDesignsIntroComponent,
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
