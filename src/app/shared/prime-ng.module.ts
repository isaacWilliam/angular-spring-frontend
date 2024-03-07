import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {TagModule} from "primeng/tag";
import {DataViewModule} from "primeng/dataview";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MessagesModule} from "primeng/messages";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {AnimateModule} from "primeng/animate";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
  exports: [
    ButtonModule,
    ToolbarModule,
    TagModule,
    DataViewModule,
    ProgressSpinnerModule,
    MessagesModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    AnimateModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class PrimeNgModule { }
