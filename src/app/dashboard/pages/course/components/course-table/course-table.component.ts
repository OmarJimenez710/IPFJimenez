import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../../models';
import { CourseService } from 'src/app/dashboard/services/course.service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent {
  @Input()
    dataSource : ICourse[] = [];

  displayedColumns = ['name','description','duration','starts'];
}
