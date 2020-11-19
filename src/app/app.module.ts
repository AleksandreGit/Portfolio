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
import {InViewportModule} from "ng-in-viewport";
import { SkillsComponent } from './profile/skills/skills.component';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    PresentationComponent,
    FooterComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
