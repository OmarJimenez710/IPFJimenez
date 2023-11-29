import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })

  constructor(private authService: AuthService, private route: Router){}

  login() : void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }else{
      this.authService.login(this.loginForm.getRawValue());
    }
  }
}
