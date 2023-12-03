import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { LessonTableComponent } from './components/lesson-table/lesson-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { lessonsRoutingModule } from './lesson-routing.module';
import { LessonDialogComponent } from './components/lesson-dialog/lesson-dialog.component';

@NgModule({
  declarations: [
    LessonComponent,
    LessonTableComponent,
    LessonDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    lessonsRoutingModule
  ],
})
export class LessonModule { }
