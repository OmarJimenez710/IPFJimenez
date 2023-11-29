import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectEnrollments } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollment-table',
  templateUrl: './enrollment-table.component.html',
  styleUrls: ['./enrollment-table.component.scss']
})
export class EnrollmentTableComponent {

  displayedColumns = ['Id', 'Course', 'Student', 'Acciones'];
  
  enrollments$: Observable<any[]>;

  constructor(private store: Store){
    this.enrollments$ = this.store.select(selectEnrollments);
  }

}
