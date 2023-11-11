import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: '',
        component: LessonComponent
    },
  ])
],

  exports: [RouterModule]
})
export class lessonsRoutingModule { }