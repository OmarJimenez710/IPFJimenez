import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  //LAZY LOADING
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    loadChildren: ()=> 
      import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> 
      import('./auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }

  //EAGER LOADING
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'home',
  //       component: HomeComponent
  //     },
  //     {
  //       path: 'students',
  //       component: StudentComponent,
  //       children: [
  //         {
  //           path: 'detail/:id',
  //           component: StudentDetailComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: 'courses',
  //       component: CourseComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard/home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
