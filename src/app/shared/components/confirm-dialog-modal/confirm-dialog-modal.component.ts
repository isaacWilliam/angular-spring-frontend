import {Component} from "@angular/core";
import { ButtonModule } from "primeng/button";
import { SharedModule } from "primeng/api";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@Component({
    selector: 'app-confirm-dialog',
    template: ' <p-confirmDialog #cd styleClass="opacity-90" [breakpoints]="{\'1500px\': \'50vw\',\'960px\': \'75vw\', \'640px\': \'100vw\'}" [style]="{width: \'30vw\'}"><ng-template pTemplate="footer">\n' +
        '<button type="button" pButton icon="pi pi-times" class="p-button-outlined" label="Não" (click)="cd.reject()"></button>\n' +
        '<button type="button" pButton icon="pi pi-check" label="Sim" (click)="cd.accept()"></button>\n' +
        '</ng-template></p-confirmDialog>',
    standalone: true,
    imports: [
        ConfirmDialogModule,
        SharedModule,
        ButtonModule,
    ],
})

export class ConfirmDialogModalComponent{}
