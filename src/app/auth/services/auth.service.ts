import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { IStudent } from 'src/app/dashboard/pages/student/models';
import { environment } from 'src/environments/environment.local';
import { LoginPayLoad } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStudent$ = new BehaviorSubject<IStudent | null>(null);
  public authStudent$ = this._authStudent$.asObservable();


  constructor(
    private httpClient: HttpClient,
    private router : Router
  ) { }

  login(payload : LoginPayLoad): void{
    this.httpClient.get<IStudent[]>(
      `${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`).subscribe({
        next: (response)=>{
          if(!response.length){
            alert('usuario invalido');
          }else{
            const authStudent = response[0];
            this._authStudent$.next(authStudent);
            localStorage.setItem('token', authStudent.token);

            this.router.navigate(['/dashboard/home']);
          }
        },
        error: (e)=>{
          alert('El servidor NO se encuentra activo activelo desde terminal con json-server db.json --watch');
        }
    })
  }

  verifyToken(): Observable<boolean>{
    return this.httpClient.get<IStudent[]>(
      `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      ).pipe(
        map((student)=>{
          if(!student.length){
            return false;
          }else{
            const authStudent = student[0];
            this._authStudent$.next(authStudent);
            localStorage.setItem('token', authStudent.token);

            return true;
          }
        })
      )
  }

  logout():void {
    this._authStudent$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
