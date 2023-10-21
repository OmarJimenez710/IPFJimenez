import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable, of, tap } from 'rxjs';
import { ICourse } from './models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course : Observable<ICourse[]>;

  constructor(
    private curseService : CourseService
  ){

    this.course = this.curseService.getCourse();
    this.curseService.loadCourse();
  
    of(this.curseService.loadCourse()).pipe(
      tap((valor)=> console.log(valor))
    ).subscribe({})
  }
}
