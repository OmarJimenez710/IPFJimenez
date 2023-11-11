import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from '../auth/auth.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        RouterModule.forChild([
        {
            path: '',
            component: DashboardComponent,
            children: [
                {
                    path: 'home',
                    component: HomeComponent
                },
                {
                    path: 'students',
                    loadChildren: ()=> 
                        import('./pages/student/student.module').then((m) => m.StudentModule) 
                },
                {
                    path: 'courses',
                    loadChildren: ()=>
                        import('./pages/course/course.module').then((m) => m.CourseModule)
                },
                {
                    path: 'lessons',
                    loadChildren: ()=>
                        import('./pages/lesson/lesson.module').then((m)=> m.LessonModule)
                },
                {
                    path: 'auth',
                    component: AuthComponent
                },
                {
                    path: '**',
                    redirectTo: 'dashboard/home'
                }
            ]
        },
        {
            path: '**',
            redirectTo: 'dashboard/home'
        }
        ])
    ],
})

export class AppRoutingModule { }