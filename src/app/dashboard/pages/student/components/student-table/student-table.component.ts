import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
})
export class StudentTableComponent {
  @Input()
    dataSource : IStudent[] = [];
  @Output()
    editStudent = new EventEmitter<IStudent>();
  @Output()
  deleteStudent = new EventEmitter<number>();

  displayedColumns = ["Id", "Nombre", "Edad", "Teléfono", "Correo", "Semestre", "Acciones"];

  constructor(private router : Router){}

  goToDetail(idStudent : number){
    this.router.navigate(['dashboard', 'students', 'detail', idStudent],{
      queryParams: {
        search: 'hola mundo'
      }
    });
  }
}
