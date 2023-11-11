import { Component, Input, Output } from '@angular/core';
import { ICourse } from '../../models';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
})
export class CourseTableComponent {
  @Input()
    dataSource : ICourse[] = [];

  displayedColumns = ['name','description','duration','starts'];
}
