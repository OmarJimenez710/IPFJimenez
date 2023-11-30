import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthStudent } from 'src/app/store/auth/auth.selectors';
import { IStudent } from 'src/app/models/student.model';
import { NotificationService } from 'src/app/services/notification.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentRole: Observable<string | undefined>;
  public studentList!: IStudent[];

  constructor(
    private studentService: StudentService,
    private matDialog: MatDialog,
    private notifier: NotificationService,
    private store: Store
  ) {
    this.studentRole = this.store.select(selectAuthStudent)
      .pipe(map((u) => u?.rol));
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (response) => {
        this.studentList = response;
      }
    })
  }

  public addStudent(): void {
    this.matDialog.open(StudentDialogComponent).afterClosed().subscribe({
      next:
        (dataStudent) => {
          this.studentService.addStudent(dataStudent);
          if (!!dataStudent) {
            this.studentService.addStudent(dataStudent).subscribe({
              next: (response) => {
                this.studentList = response;
              }
            })
            this.notifier.sucessNotification("Dado de alta", "Registro dado de alta correctamente", 'success');
          }
        }
    }
    );
  }

  public editStudent(student: IStudent): void {
    this.matDialog.open(StudentDialogComponent,{
      data : student
    }).afterClosed().subscribe({
      next : (dataStudent) => {
        if(!!dataStudent){
          this.studentService.updateStudent(dataStudent.id, dataStudent).subscribe({
            next: (response)=>{
              this.studentList = response;
            }
          })

          this.notifier.sucessNotification("Editado","Registro editado correctamente",'success');
        }
      }
    })
  }

  public deleteStudent(idStudent: number): void {
    this.notifier.questionNotification(
      "¿Está seguro de eliminar?",
      "Al eliminar el registro se borraran todo sus datos permanentemente",
      "question"
    ).then((response) => {
      if (response.isConfirmed) {
        this.studentService.deleteStudent(idStudent).subscribe({
          next: (response) => {
            this.studentList = response;
          }
        })
      }
    })
  }
}
