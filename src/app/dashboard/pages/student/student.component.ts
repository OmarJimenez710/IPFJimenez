import { Component } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { NotificationService } from '../../services/notification.service';

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
      password : '1234',
      civilStatus : 'Soltero',
      occupation : 'Desarrollador FullStack',
      token: '',
      rol: '',
      image: ''
    },
    {
      id : 2,
      name : "Aldair",
      lastname : "Flores",
      age : 28,
      phone : 7222867980,
      email : "alda@gmail.com",
      password : '1234',
      civilStatus : '',
      occupation : 'Hacker White Hat',
      token: '',
      rol: '',
      image: ''
    },
    {
      id : 3,
      name : "Citlali",
      lastname : "Garcia",
      age : 25,
      phone : 7228947617,
      email : "citla@gmail.com",
      password : '1234',
      civilStatus : 'Casada',
      occupation : 'Enfermera',
      token: '',
      rol: '',
      image: ''
    },
  ];

  constructor(
    private matDialog : MatDialog,
    private notifier: NotificationService
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
            this.notifier.sucessNotification("Dado de alta","Registro dado de alta correctamente", 'success');
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
          this.notifier.sucessNotification("Editado","Registro editado correctamente",'success');
        }
      }
    })
  }

  deleteStudent(idStudent : number) : void {
    this.notifier.questionNotification(
      "¿Está seguro de eliminar?",
      "Al eliminar el registro se borraran todo sus datos permanentemente",
      "question"
    ).then((response)=>{
      if(response.isConfirmed){
        this.student = this.student.filter((realData) => realData.id !== idStudent);
        this.notifier.sucessNotification("Eliminado", "Registro Eliminado Correctamente", "success");
      }
    })
  }
}
