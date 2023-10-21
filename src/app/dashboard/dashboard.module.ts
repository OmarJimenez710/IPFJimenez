import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { StudentModule } from './pages/student/student.module';
import { CourseModule } from './pages/course/course.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    StudentModule,
    CourseModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
