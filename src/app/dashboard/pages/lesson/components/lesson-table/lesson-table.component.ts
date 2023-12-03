import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILesson } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styles: [
  ]
})
export class LessonTableComponent {
  @Input()
    dataSource : ILesson[] = [];

  @Output()
    editLesson = new EventEmitter<ILesson>();

  @Output()
    deleteLesson = new EventEmitter<number>();
  

  displayedColumns: string[] = [
    'Nombre', 
    'Profesor', 
    'HoraInicio', 
    'HoraTermino', 
    'CantidadAlumnos',
    'Acciones'
  ];
}

