import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ILesson } from 'src/app/models/lesson.model';
import { LessonService } from 'src/app/services/lesson.service';
import { LessonDialogComponent } from './components/lesson-dialog/lesson-dialog.component';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {

  lesson$ : Observable<ILesson[]>;

  constructor(
    private lessonService: LessonService,
    private matDialog: MatDialog
  ){
    this.lesson$ = this.lessonService.getLesson();
  }

  public addLesson(): void {
    this.matDialog.open(LessonDialogComponent);
  }

  public editLesson(lesson: ILesson): void {
    this.matDialog.open(LessonDialogComponent,{
      data: lesson
    })
  }

  public deleteLesson(idLesson:  number): void {
    console.log(idLesson);
  }
}
