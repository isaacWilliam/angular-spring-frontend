import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CursosComponent} from "./container/cursos/cursos.component";
import {CursoFormComponent} from "./container/curso-form/curso-form.component";
import {cursoResolver} from "./guards/curso.resolver";

const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: 'novo',
    component: CursoFormComponent,
    resolve: {
      curso: cursoResolver
    }
  },
  {
    path: ':id',
    component: CursoFormComponent,
    resolve: {
      curso: cursoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
