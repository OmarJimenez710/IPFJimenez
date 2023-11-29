import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { ICourse } from 'src/app/models/course.model';
import { IStudent } from 'src/app/models/student.model';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean;
  enrollments: any[];
  courseOption: ICourse[];
  studentOption: IStudent[];
  isLoadingOption: boolean; 
  error: unknown;
}

export const initialState: State = {
  isLoading: false,
  isLoadingOption: false,
  enrollments: [],
  courseOption: [],
  studentOption: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => ({...state, isLoading: true})),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, { data }) => ({...state, isLoading: false, enrollments: data})),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, { error }) => ({...state, isLoading: false, error})),
  on(EnrollmentActions.loadEnrollmentsOptions, (state)=>{
    return {
      ...state, 
      isLoadingOption: true
    }
  }),
  on(EnrollmentActions.loadEnrollmentsOptionsSuccess, (state, action)=> ({
    ...state,
    courseOption: action.courses,
    studentOption: action.students,
    isLoadingOption: false
  })),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action)=>({
    ...state,
    error: action.error,
    isLoadingOption: false
  }))
);

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

