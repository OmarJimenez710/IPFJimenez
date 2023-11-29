import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

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
