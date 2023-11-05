import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
        path: '',
        component: StudentComponent
    },
    {
        path: 'detail/:id',
        component: StudentDetailComponent
    }
  ])],

  exports: [RouterModule]
})
export class AppRoutingModule { }