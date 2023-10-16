import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../models';

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
}
