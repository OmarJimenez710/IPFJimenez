import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IStudent } from 'src/app/dashboard/pages/student/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authStudent$ = new BehaviorSubject<IStudent | null>(null);
  public authStudent$ = this._authStudent$.asObservable();


  constructor() { }

  login(): Observable<IStudent>{
    const student : IStudent = {
      id : 710,
      name : 'Omar',
      lastname : 'Jimenez',
      age : 23,
      phone : 7229931578,
      email : 'omar@gmail.com',
      civilStatus : '',
      occupation : 'fullstack development'
    }

    this._authStudent$.next(student);
    return of<IStudent>(student) 
  }
}
