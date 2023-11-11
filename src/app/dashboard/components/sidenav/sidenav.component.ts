import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  completeName!: string | undefined;
  email!: string | undefined;
  image!: string | undefined;

  constructor(private authService : AuthService){
    authService.authStudent$.subscribe({
      next: (student)=>{
        this.completeName = student?.name + ' ' + student?.lastname;
        this.email = student?.email;
        this.image = student?.image;
      }
    })
  }
}
