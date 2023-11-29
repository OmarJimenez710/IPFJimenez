import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.local';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/auth/auth.actions';
import { selectAuthStudent } from 'src/app/store/auth/auth.selectors';
import { IUser } from '../models/user.model';
import { LoginPayLoad } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _authStudent$ = new BehaviorSubject<IStudent | null>(null);
 //public authStudent$ = this._authStudent$.asObservable();

  public authUser$ = this.store.select(selectAuthStudent);

  constructor(
    private httpClient: HttpClient,
    private router : Router,
    private store : Store
  ) { }

  private handleAuthStudent(authUser: IUser) : void {
    //this._authStudent$.next(authStudent);
    this.store.dispatch(authActions.setAuthStudent({data : authUser}))
    localStorage.setItem('token', authUser.token);
  } 



  login(payload : LoginPayLoad): void{
    this.httpClient.get<IUser[]>(
      `${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`).subscribe({
        next: (response)=>{
          const authUser = response[0];

          if(!authUser){
            alert('usuario invalido');
          }else if(authUser?.rol === 'STUDENT'){
            alert('Lo sentimos, los usuarios de tipo "Estudiante" no pueden hacer login');
          }
          else{
            this.handleAuthStudent(authUser);

            this.router.navigate(['/dashboard/home']);
          }
        },
        error: ()=>{
          alert('El servidor NO se encuentra activo activelo desde terminal con npm run api');
        }
    })
  }

  verifyToken(): Observable<boolean>{
    return this.httpClient.get<IUser[]>(
      `${environment.baseUrl}/users?token=${localStorage.getItem('token')}`
      ).pipe(
        map((user)=>{
          if(!user.length){
            return false;
          }else{
            const authUser = user[0];
            
            this.handleAuthStudent(authUser);

            return true;
          }
        })
      )
  }

  logout():void {
    //this._authStudent$.next(null);
    this.store.dispatch(authActions.clearAuthStudent());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
