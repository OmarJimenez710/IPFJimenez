import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private route: Router){}

  login() : void {
    console.log('hola');
    this.authService.login().subscribe({
      next: (authStudent) =>{
        if(!!authStudent){
          this.route.navigate(['/dashboard']);
        }
      }
    })
  }
}
