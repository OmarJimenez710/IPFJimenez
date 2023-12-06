import { Injectable } from '@angular/core';
import { Observable, concat, concatMap } from 'rxjs';
import { ICourse } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public getCourse(): Observable<ICourse[]>{
    return this.http.get<ICourse[]>(`${environment.baseUrl}/courses`);
  }

  public addCourse(course: ICourse): Observable<ICourse[]>{
    return this.http.post<ICourse>(`${environment.baseUrl}/courses`, course)
      .pipe(concatMap(()=> this.getCourse()));
  }

  public updateCourse(course: ICourse): Observable<ICourse[]>{
    return this.http.put<ICourse>(`${environment.baseUrl}/courses/${course.id}`, course)
      .pipe(concatMap(()=> this.getCourse()));
  }

  public deleteCourse(idCourse: number): Observable<ICourse[]>{
    return this.http.delete(`${environment.baseUrl}/courses/${idCourse}`)
      .pipe(concatMap(()=> this.getCourse()));
  }
}


