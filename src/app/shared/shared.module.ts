import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryPipe} from "./pipes/category.pipe";
import {ToastComponent} from "./components/toast/toast.component";
import {ConfirmationService} from "primeng/api";
import {ConfirmDialogModalComponent} from './components/confirm-dialog-modal/confirm-dialog-modal.component'
import {FormErrorComponent} from "./components/form-error/form-error.component";
import {PaginatorComponent} from "./components/paginator/paginator.component";

@NgModule({
    imports: [
    CommonModule,
    CategoryPipe,
    ToastComponent,
    ConfirmDialogModalComponent,
    FormErrorComponent,
    PaginatorComponent
],
    exports: [
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
