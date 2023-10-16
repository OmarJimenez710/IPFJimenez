import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';



@NgModule({
  declarations: [
    StudentComponent,
    StudentTableComponent,
    StudentDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
