import { Pipe, PipeTransform } from '@angular/core';
import { IStudent } from 'src/app/dashboard/pages/student/models';

@Pipe({
  name: 'textPlugins'
})
export class TextPluginsPipe implements PipeTransform {

  transform(value : IStudent, ...args: unknown[]): unknown {
    
    if(!!value){
      if(args[0] == 'fullname' && args[1] == 'format'){
        let name = this.setFormat(value.name);
        let lastname = this.setFormat(value.lastname);

        return name + ' ' + lastname;
      }
    }

    return '';
  }

  setFormat(text : string) : string {
    const firstLetter = text.charAt(0);
    const rest = text.slice(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
  }
}
