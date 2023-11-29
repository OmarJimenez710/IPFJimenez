import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ILesson } from 'src/app/models/lesson.model';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {

  lesson$ : Observable<ILesson[]>;

  constructor(private lessonService: LessonService){
    this.lesson$ = this.lessonService.getLesson();
  }
}
