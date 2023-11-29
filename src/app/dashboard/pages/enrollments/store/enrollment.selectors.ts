import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrollment from './enrollment.reducer';

export const selectEnrollmentState = createFeatureSelector<fromEnrollment.State>(
  fromEnrollment.enrollmentFeatureKey
);

export const selectEnrollments = createSelector(
  selectEnrollmentState,
  (state) => state.enrollments
)

export const selectCourseOptions = createSelector(
  selectEnrollmentState,
  (state) => state.courseOption
)

export const selectStudentOption = createSelector(
  selectEnrollmentState,
  (state) => state.studentOption
) 
