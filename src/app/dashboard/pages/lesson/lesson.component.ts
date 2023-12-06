import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ILesson } from 'src/app/models/lesson.model';
import { LessonService } from 'src/app/services/lesson.service';
import { LessonDialogComponent } from './components/lesson-dialog/lesson-dialog.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {

  lesson$ : Observable<ILesson[]>;

  constructor(
    private lessonService: LessonService,
    private notifier: NotificationService,
    private matDialog: MatDialog
  ){
    this.lesson$ = this.lessonService.getLesson();
  }

  public addLesson(): void {
    this.matDialog.open(LessonDialogComponent).afterClosed().subscribe({
      next: (dataLesson)=>{
        if(!!dataLesson){
          dataLesson.numberStudent == ''? dataLesson.numberStudent = 0 : dataLesson;
          this.lesson$ = this.lessonService.createLesson(dataLesson);

          this.notifier.successNotification("Dado de alta", "Clase dada de alta correctamente", 'success');
        }
      }
    });
  }

  public editLesson(lesson: ILesson): void {
    this.matDialog.open(LessonDialogComponent,{
      data: lesson
    }).afterClosed().subscribe({
      next: (dataLesson)=>{
        if(!!dataLesson){
          dataLesson.numberStudent == ''? dataLesson.numberStudent = 0 : dataLesson;
          this.lesson$ = this.lessonService.updateLesson(dataLesson);

          this.notifier.successNotification("Actualizada", "Clase actualizada correctamente", 'success'); 
        }
      }
    })
  }

  public deleteLesson(idLesson:  number): void {
    this.notifier.questionNotification('¿Está seguro de eliminar?', 
    'Al eliminar el registro se borraran todo sus datos permanentemente', 
    'question').then((response)=>{
      if(response.isConfirmed){
        this.lesson$ = this.lessonService.deleteLesson(idLesson);
      }
    });
  }
}
