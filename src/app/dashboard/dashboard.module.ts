import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { StudentModule } from './pages/student/student.module';
import { CourseDialogComponent } from './course/course-dialog/course-dialog.component';
import { CourseTableComponent } from './course/course-table/course-table.component'

@NgModule({
  declarations: [
    DashboardComponent,
    CourseDialogComponent,
    CourseTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    StudentModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
