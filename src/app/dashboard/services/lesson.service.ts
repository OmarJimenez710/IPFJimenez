import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILesson } from '../pages/lesson/models';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private httpClient : HttpClient) { }

  getLesson() : Observable<ILesson[]>{
    return this.httpClient.get<ILesson[]>(`${environment.baseUrl}/lessons`);
  }

  createLesson(lesson : ILesson): Observable<ILesson>{
    return this.httpClient.post<ILesson>(`${environment.baseUrl}/lesson`, lesson);
  } 
}
