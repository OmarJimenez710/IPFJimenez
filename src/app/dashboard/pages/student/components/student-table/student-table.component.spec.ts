import { TestBed } from "@angular/core/testing";
import { StudentTableComponent } from "./student-table.component"
import { SharedModule } from "src/app/shared/shared.module";

describe('StudentTableComponent',()=>{
    let studentTableComponent : StudentTableComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[
                StudentTableComponent
            ],
            imports:[
                SharedModule
            ]
        })

        studentTableComponent = TestBed.createComponent(StudentTableComponent).componentInstance;
    })

    it('Should be create StudentTableComponent',()=>{
        expect(studentTableComponent).toBeTruthy();
    });

    it('Should be call Router Navigate',()=>{
        const spyRouter = spyOn((studentTableComponent as any).router, 'navigate');

        studentTableComponent.goToDetail(1);
        
        expect(spyRouter).toHaveBeenCalled();
    })

})