import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { ILesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient: HttpClient) { }

  getLesson() : Observable<ILesson[]>{
    return this.httpClient.get<ILesson[]>(`${environment.baseUrl}/lessons`);
  }

  createLesson(lesson : ILesson): Observable<ILesson[]>{
    return this.httpClient.post<ILesson>(`${environment.baseUrl}/lessons`, lesson)
    .pipe(concatMap(() => this.getLesson()));
  } 
  
  updateLesson(lesson : ILesson) : Observable<ILesson[]>{
    return this.httpClient.put<ILesson>(`${environment.baseUrl}/lessons/${lesson.id}`, lesson)
    .pipe(concatMap(()=> this.getLesson()));
  }

  deleteLesson(idLesson : number) : Observable<ILesson[]>{
    return this.httpClient.delete(`${environment.baseUrl}/lessons/${idLesson}`)
    .pipe(() => this.getLesson());
  }
}
