import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TITLE_LIST } from 'src/app/list/title.list'
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent {
  formCourse: FormGroup;
  public titleForm: string = '';

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: ICourse
    ){
    this.titleForm = TITLE_LIST.addCourse;
    this.formCourse = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      starts: ['', [Validators.required]]
    })

    if(course){
      this.titleForm = TITLE_LIST.editCourse;
      this.formCourse.patchValue(course);
    }
  }
}
