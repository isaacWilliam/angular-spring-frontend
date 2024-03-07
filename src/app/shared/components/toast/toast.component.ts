import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {MessageLayoutService} from "../../services/message.layout.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toast',
  template: '<p-toast [breakpoints]="{\'920px\': {width: \'100%\', right: \'0\', left: \'0\'}}"></p-toast>',
  styles: [':host::ng-deep{.p-toast-icon-close{ border: none}}'],
  providers: [MessageService]
})

export class ToastComponent implements OnInit, OnDestroy{

  private subscription: Subscription = new Subscription();

  constructor(
    public messageService: MessageService,
    public messageServiceLayout: MessageLayoutService,
  ) {
  }

  ngOnInit() {
    this.subscription = this.messageServiceLayout.messageChange.subscribe(
      message => this.messageService.add(message)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
