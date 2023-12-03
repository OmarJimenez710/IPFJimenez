import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, tap } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course : Observable<ICourse[]>;

  constructor(
    private curseService : CourseService,
    private matDialog: MatDialog
  ){
    this.course = this.curseService.getCourse();
    this.curseService.loadCourse();
  
    of(this.curseService.loadCourse()).pipe(
      tap((valor)=> console.log(valor))
    ).subscribe({})
  }

  public addCourse(): void {
    this.matDialog.open(CourseDialogComponent);
  }

  public editCourse(course: ICourse): void {
    this.matDialog.open(CourseDialogComponent,{
      data: course
    });
  } 

  public deleteCourse(idCourse: number): void {

  }
}
