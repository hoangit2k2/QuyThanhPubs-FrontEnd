import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private messageService: MessageService) { }

    showAlert(type: string, message: string, messageDetail:string) {
      this.messageService.add({severity:type , summary: message , detail: messageDetail});
    }

}
