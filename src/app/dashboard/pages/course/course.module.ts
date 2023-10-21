import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CourseTableComponent,
    CourseDialogComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
