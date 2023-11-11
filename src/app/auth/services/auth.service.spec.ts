import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { AuthService } from "./auth.service";
import { IStudent } from 'src/app/dashboard/pages/student/models/index'
import { environment } from "src/environments/environment.local";
import { MockProvider } from 'ng-mocks';
import { Router } from "@angular/router";

fdescribe('AuthService',()=>{
    let authService : AuthService;
    let httpTestingController : HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [
                MockProvider(Router)
            ]
        })

        authService = TestBed.inject(AuthService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('Should be instance AuthService', ()=>{
        expect(authService).toBeTruthy();
    });

    it('Should be get a Response in Login()', ()=>{
        const mockStudent : IStudent = {
            id : 5,
            name : 'Omar',
            lastname : 'Jimenez',
            age : 23,
            phone : 7228896471,
            email : 'omar.jimenez@gmail.com',
            password : '1234',
            civilStatus : 'soltero',
            occupation : 'FullStack Engineer',
            token: 'asdfghjklñzxcvbnm',
            rol: 'Developed'
        };

        authService.login({
            email: mockStudent.email,
            password: mockStudent.password
        });

        httpTestingController.expectOne({
            method: 'GET',
            url: `${environment.baseUrl}/users?email=${mockStudent.email}&password=${mockStudent.password}`
        }).flush([
            mockStudent
        ])

        authService.authStudent$.subscribe({
            next: (response)=>{
                expect(response).toEqual(mockStudent);
            }
        })
    })

})