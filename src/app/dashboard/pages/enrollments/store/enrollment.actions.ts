import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ICourse } from 'src/app/models/course.model';
import { CreateEnrollmentPayload } from 'src/app/models/enrollment.model';
import { IStudent } from 'src/app/models/student.model';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: any[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Enrollments Options': emptyProps(),
    'Load Enrollments Options Success': props<{courses: ICourse[],students: IStudent[]}>(),
    'Load Enrollments Options Failure': props<{error: undefined}>(),
    'Create Enrollment': props<{payload: CreateEnrollmentPayload}>(),
    'Create Enrollment Failure': props<{error: unknown}>(),
  }
});
