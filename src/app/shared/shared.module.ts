import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimeNgModule} from "./prime-ng.module";
import {CategoryPipe} from "./pipes/category.pipe";
import {ToastComponent} from "./components/toast/toast.component";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModalComponent} from './components/confirm-dialog-modal/confirm-dialog-modal.component'

@NgModule({
  declarations: [
    CategoryPipe,
    ToastComponent,
    ConfirmDialogModalComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PrimeNgModule,
    CategoryPipe,
    ToastComponent,
    ConfirmDialogModalComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
