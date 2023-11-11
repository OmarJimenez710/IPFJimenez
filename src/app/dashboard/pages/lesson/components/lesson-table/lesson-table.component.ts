import { Component, Input } from '@angular/core';
import { ILesson } from '../../models';

@Component({
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styles: [
  ]
})
export class LessonTableComponent {
  @Input()
    dataSource : ILesson[] = [];

  displayedColumns: string[] = ['Nombre', 'Profesor', 'HoraInicio', 'HoraTermino', 'CantidadAlumnos'];
}

