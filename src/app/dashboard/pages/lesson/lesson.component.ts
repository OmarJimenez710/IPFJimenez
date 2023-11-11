import { Component } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Observable } from 'rxjs';
import { ILesson } from './models';

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
