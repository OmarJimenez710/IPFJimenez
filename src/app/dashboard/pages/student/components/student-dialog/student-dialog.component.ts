import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TITLE_LIST } from 'src/app/list/title.list';
import { IStudent } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss']
})
export class StudentDialogComponent {
  TITLE_LIST = TITLE_LIST;
  studentForm : FormGroup;
  titleForm : string = '';
  
  constructor(
    private fb : FormBuilder,
    private matDialogRef : MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) student : IStudent
  ){
    this.titleForm = TITLE_LIST.addStudent;

    this.studentForm = this.fb.group({
      name : ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)]],
      lastname : ['',[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      age : ['',[
        Validators.required,
        //Validators.pattern('/^[1-9]\d{6,10}$/')
      ]],
      phone : ['',[
        Validators.required,
        //Validators.pattern('/^[1-9]\d{6,10}$/')
      ]],
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      civilStatus : ['', Validators.required],
      occupation : ['']
    })

    if(student){
      this.titleForm = TITLE_LIST.editStudent;
      this.studentForm.patchValue(student);
    }
  }

  saveDataStudent() : void {
    if(this.studentForm.invalid){
      this.studentForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.studentForm.value);
    }
  }
}
