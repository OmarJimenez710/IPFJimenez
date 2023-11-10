import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from "src/app/shared/shared.module";

describe('loginComponent', ()=>{
    let loginComponent: LoginComponent;


    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports:[
                HttpClientTestingModule,
                SharedModule
            ]
        })

        loginComponent = TestBed.createComponent(LoginComponent).componentInstance;
    })

    it('should be create loginComponent', ()=>{
        expect(loginComponent).toBeTruthy();
    })

    it('should be marked all fields in form', ()=>{
        loginComponent.login();

        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    })

    it('should be launch a error', ()=>{
        loginComponent.loginForm.patchValue({
            email: '',
            password: ''
        });

        loginComponent.login();

        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    })

    it('should be a correct form',()=>{
        loginComponent.loginForm.patchValue({
            email: 'omar.jimenez@gmial.com',
            password: '1234'
        })

        expect(loginComponent.emailControl.touched).toBeFalse();
        expect(loginComponent.passwordControl.touched).toBeFalse();
    })

    it('should be call to AuthService', ()=>{
        loginComponent.loginForm.patchValue({
            email: 'omar.jimenez@gmail.com',
            password: '1234'
        });

        //se crea un espia, para saber si el metodo login del authService se ha llamado
        const spyOnAuthServiceLogin = spyOn(
            (loginComponent as any).authService, 'login'
        );

        loginComponent.login();

        expect(spyOnAuthServiceLogin).toHaveBeenCalled(); //como el formulario es correcto, esperariamos que si 
    })
})