import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { LessonTableComponent } from './components/lesson-table/lesson-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { lessonsRoutingModule } from './lesson-routing.module';

@NgModule({
  declarations: [
    LessonComponent,
    LessonTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    lessonsRoutingModule
  ],
})
export class LessonModule { }
