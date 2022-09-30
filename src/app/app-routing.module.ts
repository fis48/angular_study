import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnPipesComponent } from './foundations/learn-pipes/learn-pipes.component';
import { DashboardComponent } from './charts/dashboard/dashboard.component';
import { DirectivesComponent } from './foundations/directives/directives.component';

const routes: Routes = [
  {path:"", component: LearnPipesComponent},
  {path:"charts", component: DashboardComponent},
  {path:"directives", component: DirectivesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
