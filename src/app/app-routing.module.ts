import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddaComponent} from './profile/projects/adda/adda.component';

const routes: Routes = [
  { path: 'adda', component: AddaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
