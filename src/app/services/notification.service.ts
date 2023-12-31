import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IbodyNotification } from '../models/notification.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifier$ = new Subject<IbodyNotification>();

  constructor() {
    this.notifier$.subscribe({
      next: (notification)=>{
        Swal.fire(notification.title, notification.message, notification.type);
      }
    })
  }

  errorNotification(title:string, message:string, type: string) : void {
    this.notifier$.next({
        type,
        title,
        message
    });
  }

  successNotification(title:string, message:string, type: string) : void {
    this.notifier$.next({
      type,
      title,
      message
    })
  }

  questionNotification(title:string, message:string, type: any) : Promise<any> {
    return Swal.fire({
      title,
      text: message,
      icon: type,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showCloseButton: true
    })
  }
}
