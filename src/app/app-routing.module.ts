import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './dashboard/pages/student/student.component';
import { CourseComponent } from './dashboard/pages/course/course.component';
import { AuthComponent } from './auth/auth.component';
import { StudentDetailComponent } from './dashboard/pages/student/components/student-detail/student-detail.component';
import { HomeComponent } from './dashboard/pages/home/home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'students',
        component: StudentComponent,
        children: [
          {
            path: 'detail/:id',
            component: StudentDetailComponent
          }
        ]
      },
      {
        path: 'courses',
        component: CourseComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
