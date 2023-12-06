import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TITLE_LIST } from 'src/app/list/title.list';
import { ILesson } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lesson-dialog',
  templateUrl: './lesson-dialog.component.html',
  styleUrls: ['./lesson-dialog.component.scss']
})
export class LessonDialogComponent {
  TITLE_LIST = TITLE_LIST;
  public lessonForm: FormGroup;
  public titleForm: string =''
  public save: boolean = true;

   constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<LessonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) lesson: ILesson
   ){
    this.titleForm = TITLE_LIST.addLesson;

    this.lessonForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      hourToStart: ['', [Validators.required]],
      hourToFinish: ['', [Validators.required]],
      numberStudent: ['']
    })

    if(lesson){
      this.save = false;
      this.titleForm = TITLE_LIST.editLesson;
      this.lessonForm.patchValue(lesson);
    }
  }

  public sendData(): void {
    if(this.lessonForm.invalid){
      this.lessonForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.lessonForm.value);
    }
  }
}
