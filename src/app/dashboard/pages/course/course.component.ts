import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, tap } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course$ : Observable<ICourse[]>;

  constructor(
    private curseService : CourseService,
    private notifier: NotificationService,
    private matDialog: MatDialog
  ){
    this.course$ = this.curseService.getCourse();
  }

  public addCourse(): void {
    this.matDialog.open(CourseDialogComponent).afterClosed().subscribe({
      next:(dataCourse)=>{
        if(!!dataCourse){
          this.course$ = this.curseService.addCourse(dataCourse);
          this.notifier.successNotification('Alta exitosa','Curso dado de alta exitosamente','success');
        }
      }
    });
  }

  public editCourse(course: ICourse): void {
    this.matDialog.open(CourseDialogComponent,{
      data: course
    }).afterClosed().subscribe({
      next: (dataCourse)=>{
        if(!!dataCourse){
          this.course$ = this.curseService.updateCourse(dataCourse);
          this.notifier.successNotification('Edición exitosa','Curso editado exitosamente','success');
        }
      }
    });
  } 

  public deleteCourse(idCourse: number): void {
    this.notifier.questionNotification('¿Está seguro de eliminar?',
      'Al eliminar el registro se borraran todo sus datos permanentemente',
      'question').then((response)=>{
          if(response.isConfirmed){
            this.course$ = this.curseService.deleteCourse(idCourse);
            this.notifier.successNotification('Eliminación exitosa','Curso eliminado exitosamente','success');
          }
      })
  }
}
