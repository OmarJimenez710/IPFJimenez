import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { CreateEnrollmentPayload } from 'src/app/models/enrollment.model';
import { ICourse } from 'src/app/models/course.model';
import { IStudent } from 'src/app/models/student.model';

@Injectable()
export class EnrollmentEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getEnrollments().pipe(
          //SI LA PETICION SALE BIEN HAS LO DE MAP
          map(data => EnrollmentActions.loadEnrollmentsSuccess({ data })),
          
          //SI LA PETICION SALE MAL
          catchError(error => of(EnrollmentActions.loadEnrollmentsFailure({ error }))))
      )
    );
  });

  rolEnrollmentOption$ = createEffect(()=> this.actions$.pipe(
    ofType(EnrollmentActions.loadEnrollmentsOptions),
    concatMap(()=>
      this.getEnrollmentOption().pipe(
        map((resp) => 
          EnrollmentActions.loadEnrollmentsOptionsSuccess(resp)
        ), catchError((error) =>
          of(EnrollmentActions.loadEnrollmentsFailure({error: error}))
        )
      )
    )
    )
  );

  createEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollment),
        concatMap((action) => {
          return this.createEnrollment(action.payload).pipe(
            map(data => EnrollmentActions.loadEnrollments()),
            catchError((error) => of(EnrollmentActions.createEnrollmentFailure({error})))
          )
        })
    )
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  createEnrollment(payload: CreateEnrollmentPayload): Observable<any> {
    return this.httpClient.post<any>(`${environment.baseUrl}/enrollment`, payload);
  }

  getEnrollmentOption() : Observable<{courses: ICourse[],students: IStudent[]}>{
    return forkJoin([
      this.httpClient.get<ICourse[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<IStudent[]>(`${environment.baseUrl}/students`)
    ]).pipe(
      map((resp)=>{
        console.log('-->' + resp);

        return {
          courses: resp[0],
          students: resp[1]
        }
      })
    )
  }

  getEnrollments(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.baseUrl}/enrollments?_expand=course&&_expand=student`);
  }
}
