import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './profile/navbar/navbar.component';
import { IntroComponent } from './profile/intro/intro.component';
import { PresentationComponent } from './profile/presentation/presentation.component';
import { FooterComponent } from './profile/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatIconModule } from '@angular/material/icon';
import { WorkComponent } from './profile/work/work.component';
import {InViewportModule} from 'ng-in-viewport';
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProjectsComponent } from './profile/projects/projects.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { InterestsComponent } from './profile/interests/interests.component';
import { ContactComponent } from './profile/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddaComponent } from './profile/projects/adda/adda.component';
import { IslandsComponent } from './profile/projects/islands/islands.component';
import { ThurstonComponent } from './profile/projects/thurston/thurston.component';
import { RaymarchComponent } from './profile/projects/raymarch/raymarch.component';
import { VaisseauComponent } from './profile/projects/vaisseau/vaisseau.component';
import { PortfolioComponent } from './profile/projects/portfolio/portfolio.component';
import { MainComponent } from './profile/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    PresentationComponent,
    FooterComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    InterestsComponent,
    ContactComponent,
    AddaComponent,
    IslandsComponent,
    ThurstonComponent,
    RaymarchComponent,
    VaisseauComponent,
    PortfolioComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    InViewportModule,
    MatProgressBarModule,
    TagCloudModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
