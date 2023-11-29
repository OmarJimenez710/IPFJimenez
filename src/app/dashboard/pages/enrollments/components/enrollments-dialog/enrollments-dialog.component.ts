import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { Observable, take } from 'rxjs';
import { selectCourseOptions, selectStudentOption } from '../../store/enrollment.selectors';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';
import { ICourse } from 'src/app/models/course.model';
import { IStudent } from 'src/app/models/student.model';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrls: ['./enrollments-dialog.component.scss']
})
export class EnrollmentsDialogComponent {
  userIdControl = new FormControl<number | null>(null);
  courseIdControl = new FormControl<number | null>(null);

  enrollmentForm = new FormGroup({
    courseId: this.courseIdControl,
    userId: this.userIdControl,
  })

  courseOptions$: Observable<ICourse[]>;
  studentOptions$: Observable<IStudent[]>;

  constructor(
      private store: Store, 
      private actions$: Actions, 
      private matDialogRef: MatDialogRef<EnrollmentsDialogComponent>){

    this.store.dispatch(EnrollmentActions.loadEnrollmentsOptions());

    this.courseOptions$ = this.store.select(selectCourseOptions);
    this.studentOptions$ = this.store.select(selectStudentOption);

    this.actions$.pipe(ofType(EnrollmentActions.loadEnrollments), take(1)).subscribe({
      next:() => {
        this.matDialogRef.close();
      },
    })
  }

  onSubmit(): void {
    //this.store.dispatch(EnrollmentActions.createEnrollment({payload: this.enrollmentForm.getRawValue()}));
  }
}
