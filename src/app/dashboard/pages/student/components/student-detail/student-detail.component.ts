import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  constructor(private activateRoute : ActivatedRoute){
    console.log(this.activateRoute.snapshot.params['id']);
  }
}
