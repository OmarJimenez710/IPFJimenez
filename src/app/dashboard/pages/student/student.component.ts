import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  student : IStudent [] = [
    {
      id : 1,
      name : "Omar",
      lastname : "Jimenez",
      age : 23,
      phone : 7226646819,
      email: "omar710.jimflo@gmail.com",
      civilStatus : 'Soltero',
      occupation : 'Desarrollador FullStack'
    },
    {
      id : 2,
      name : "Aldair",
      lastname : "Flores",
      age : 28,
      phone : 7222867980,
      email : "alda@gmail.com",
      civilStatus : '',
      occupation : 'Hacker White Hat'
    },
    {
      id : 3,
      name : "Citlali",
      lastname : "Garcia",
      age : 25,
      phone : 7228947617,
      email : "citla@gmail.com",
      civilStatus : 'Casada',
      occupation : 'Enfermera'
    },
  ];

  constructor(
    private matDialog : MatDialog
  ){}

  addStudent() : void {
    this.matDialog.open(StudentDialogComponent).afterClosed().subscribe({
      next : 
        (dataStudent) =>{
          if(!!dataStudent){
            this.student = [
              ...this.student,
              {
                ...dataStudent,
                id : this.student[this.student.length - 1].id + 1
              }
            ]
          }
        }
    }
    );
  }

  editStudent(student : IStudent) : void {
    this.matDialog.open(StudentDialogComponent,{
      data : student
    }).afterClosed().subscribe({
      next : (dataStudent) => {
        if(!!dataStudent){
          this.student = this.student.map((oldDataStudent)=> 
            oldDataStudent.id == student.id?
            {...oldDataStudent,...dataStudent} 
            : oldDataStudent
          );
        }
      }
    })
  }

  deleteStudent(idStudent : number) : void {
    this.student = this.student.filter((realData) => realData.id !== idStudent);
  }
}
