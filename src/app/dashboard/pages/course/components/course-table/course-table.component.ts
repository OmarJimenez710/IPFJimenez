import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent {
  @Input()
    dataSource : ICourse[] = [];
  @Output()
    editCourse = new EventEmitter<ICourse>();
  @Output()
    deleteCourse = new EventEmitter<number>(); 

  displayedColumns = [
    'name',
    'description',
    'duration',
    'starts',
    'Acciones'
  ];
}
