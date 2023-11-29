import { Component, Input } from '@angular/core';
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

  displayedColumns: string[] = ['Nombre', 'Profesor', 'HoraInicio', 'HoraTermino', 'CantidadAlumnos'];
}

