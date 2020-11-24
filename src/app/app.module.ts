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
    InterestsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        MatIconModule,
        InViewportModule,
        MatProgressBarModule,
        TagCloudModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
