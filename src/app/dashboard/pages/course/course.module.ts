import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseComponent } from './course.component';



@NgModule({
  declarations: [
    CourseTableComponent,
    CourseDialogComponent,
    CourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
