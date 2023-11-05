import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AppRoutingModule } from './student-routing.module';

@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent,
    StudentDialogComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
