import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import { LearnPipe } from './pipes/learn.pipe';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    LearnPipesComponent,
    LearnPipe,
    DirectivesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LearnPipe
  ]
})
export class FoundationsModule { }
