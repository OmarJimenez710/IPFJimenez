import { TestBed } from "@angular/core/testing";
import { StudentDialogComponent } from "./student-dialog.component"
import { SharedModule } from "src/app/shared/shared.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe('StudentDialogComponent', ()=>{
    let studentDialogComponent : StudentDialogComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                StudentDialogComponent
            ],
            imports: [
                SharedModule,
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        })

        studentDialogComponent = TestBed.createComponent(StudentDialogComponent).componentInstance;
    })

    it('Should be create studentDialogComponent', ()=>{
        expect(studentDialogComponent).toBeTruthy();
    })

    it('Should be email invalid', ()=>{
        studentDialogComponent.studentForm.get('email')?.setValue('omar.jimenezgmail.com');
        expect(studentDialogComponent.studentForm.get('email')?.invalid).toBeTrue();
    })

    it('Should be name invalid', ()=>{
        studentDialogComponent.studentForm.get('name')?.setValue('o');
        expect(studentDialogComponent.studentForm.get('name')?.invalid).toBeTrue();
    })
})