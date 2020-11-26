import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddaComponent} from './profile/projects/adda/adda.component';
import {MainComponent} from './profile/main/main.component';
import {IslandsComponent} from './profile/projects/islands/islands.component';
import {PortfolioComponent} from './profile/projects/portfolio/portfolio.component';
import {RaymarchComponent} from './profile/projects/raymarch/raymarch.component';
import {ThurstonComponent} from './profile/projects/thurston/thurston.component';
import {VaisseauComponent} from './profile/projects/vaisseau/vaisseau.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adda', component: AddaComponent },
  { path: 'island', component: IslandsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'raymarch', component: RaymarchComponent },
  { path: 'thurston', component: ThurstonComponent },
  { path: 'vaisseau', component: VaisseauComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
