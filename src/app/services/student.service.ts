import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, concatMap } from 'rxjs';
import { IStudent } from '../models/student.model';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient) {}


  public getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${environment.baseUrl}/students`);
  }

  public addStudent(student: IStudent): Observable<IStudent[]>{
    return this.http.post<IStudent>(`${environment.baseUrl}/students`, student)
    .pipe(concatMap(()=> this.getStudents()));
  }

  public deleteStudent(idStudent: number) : Observable<IStudent[]>{
    return this.http.delete(`${environment.baseUrl}/students/${idStudent}`)
    .pipe(concatMap(()=> this.getStudents()));
  }

  public updateStudent(idStudent: number, student: IStudent): Observable<IStudent[]>{
    return this.http.put<IStudent>(`${environment.baseUrl}/students/${idStudent}`, student)
    .pipe(concatMap(()=> this.getStudents()));
  }
}
