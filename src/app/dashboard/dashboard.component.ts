import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  student : boolean = false;
  classRoom : boolean = false;
  course : boolean = false;

  openSectionStudent() : void { 
    this.student = true;
    this.classRoom = false;
    this.course = false;
  }

  openSectionCourse() : void { 
    this.student = false;
    this.classRoom = false;
    this.course = true;
  }
}
