import { _isNumberValue } from '@angular/cdk/coercion';
import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors'
})
export class FormErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    let messageError : string [] = []; 

    if(!value){
      return '';
    }

    if('required' in value){
      messageError.push("El campo es requerido");
    }
    if('minlength' in value){
      messageError.push("Campo inválido, longuitud demasido pequeña");
    }
    if('maxlength' in value){
      messageError.push("Campo inválido, longuitud demasido grande");
    }
    if('email' in value){
      messageError.push("Email inválido");
    }
    /*if(!_isNumberValue(value['pattern']?.actualValue)){
      messageError.push("Error, ingrese números unicamente");
    }*/

    return messageError.join(".");
  }
}
