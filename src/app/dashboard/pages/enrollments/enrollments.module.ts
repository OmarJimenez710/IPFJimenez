import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollment.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentTableComponent } from './components/enrollment-table/enrollment-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnrollmentsDialogComponent } from './components/enrollments-dialog/enrollments-dialog.component';


@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentTableComponent,
    EnrollmentsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects])
  ]
})
export class EnrollmentsModule { }
