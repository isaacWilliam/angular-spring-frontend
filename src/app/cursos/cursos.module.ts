import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CursosRoutingModule} from './cursos-routing.module';
import {CursosComponent} from './container/cursos/cursos.component';
import {SharedModule} from "../shared/shared.module";
import { CursoFormComponent } from './container/curso-form/curso-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CursosListComponent } from './components/cursos-list/cursos-list.component';


@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        CursosComponent,
        CursoFormComponent,
        CursosListComponent
    ]
})
export class CursosModule { }
