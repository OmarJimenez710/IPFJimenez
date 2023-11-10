import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {
  @Input()
    dataSource : IStudent[] = [];
  @Output()
    editStudent = new EventEmitter<IStudent>();
  @Output()
  deleteStudent = new EventEmitter<number>();

  displayedColumns = ["Id", "Nombre", "Edad", "Correo", "Ocupacion", "Acciones"];

  constructor(private router : Router){}

  goToDetail(idStudent : number){
    this.router.navigate(['dashboard', 'students', 'detail', idStudent],{
      queryParams: {
        search: 'hola mundo'
      }
    });
  }
}
