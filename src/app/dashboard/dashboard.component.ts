import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  student : boolean = false;

  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
  }
}
