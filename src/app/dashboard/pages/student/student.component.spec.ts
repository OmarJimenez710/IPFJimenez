import { TestBed } from "@angular/core/testing";
import { StudentComponent } from "./student.component"
import { SharedModule } from "src/app/shared/shared.module";
import { StudentTableComponent } from "./components/student-table/student-table.component";
import { StudentDialogComponent } from "./components/student-dialog/student-dialog.component";
import { StudentDetailComponent } from "./components/student-detail/student-detail.component";

describe('StudentComponent', ()=>{
    let studentComponent : StudentComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [
                StudentComponent,
                StudentTableComponent,
                StudentDialogComponent,
                StudentDetailComponent
            ],
            imports: [
                SharedModule,
                
            ]
        })

        studentComponent = TestBed.createComponent(StudentComponent).componentInstance;
    })

    it('Should be create studentComponent',()=>{
        expect(studentComponent).toBeTruthy();
    })
})