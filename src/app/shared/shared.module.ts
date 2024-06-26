import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimeNgModule} from "./prime-ng.module";
import {CategoryPipe} from "./pipes/category.pipe";
import {ToastComponent} from "./components/toast/toast.component";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModalComponent} from './components/confirm-dialog-modal/confirm-dialog-modal.component'
import {FormErrorComponent} from "./components/form-error/form-error.component";
import {PaginatorComponent} from "./components/paginator/paginator.component";

@NgModule({
  declarations: [
    CategoryPipe,
    ToastComponent,
    ConfirmDialogModalComponent,
    FormErrorComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    PrimeNgModule,
    CategoryPipe,
    ToastComponent,
    ConfirmDialogModalComponent,
    FormErrorComponent,
    PaginatorComponent
  ],
  providers: [
    ConfirmationService
  ]
})
export class SharedModule { }
