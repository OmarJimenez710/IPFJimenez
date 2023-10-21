import { Injectable } from '@angular/core';
import { ICourse } from '../pages/course/models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  private course : ICourse[] = [
    {
      name: "Curso de Java Básico",
      description : "Curso de Java para principiantes en donde aprenderas habilidades para tu vida futura como programador",
      duration : "5:50:10",
      starts : 3
    },
    {
      name: "Curso de Java Intermedio",
      description : "Curso de Java donde prodrás aplicar lo aprendido en proyectos reales",
      duration : "3:42:48",
      starts : 5
    },
    {
      name: "Curso de Java Avanzado",
      description : "Curso de Java donde realizaras grandes proyectos para empresas como BBVA",
      duration : "5:50:10",
      starts : 4
    }
  ]

  private course$ = new BehaviorSubject<ICourse[]>([]);

  loadCourse() : void {
    this.course$.next(this.course);
  }

  getCourse(): Subject<ICourse[]>{
    return this.course$;
  }
}
