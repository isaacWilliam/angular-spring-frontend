import {Injectable} from "@angular/core";
import {ConfirmationService, Message} from "primeng/api";
import {map, Observable, Subject, Subscription, take} from "rxjs";

@Injectable()
export class MessageLayoutService {

  constructor(private confirmationService: ConfirmationService) {
  }

  messageChange = new Subject<Message>();
  confirmSubject = new Subject<boolean>();

  showSimpleToast(messages: Message) {
    this.messageChange.next(messages);
  }

  confirmDilalog(config: any): Observable<boolean>{
    this.confirmationService.confirm({
      header: config.header,
      message: config.message,
      icon: config.icon,
      accept: () => {this.confirmSubject.next(true)},
      reject: () => {this.confirmSubject.next(false)}
    });
    return this.confirmSubject.asObservable();
  }


}
