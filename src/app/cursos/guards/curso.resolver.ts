import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {CursoService} from "../services/curso.service";
import {Observable, of} from "rxjs";
import {Curso} from "../model/curso";

export const cursoResolver: ResolveFn<Curso> = (route: ActivatedRouteSnapshot): Observable<any> => {
  const cs = inject(CursoService);
  const id = route.paramMap.get('id')!;

  if(id){
    return cs.getCursoById(id);
  }

  return of({
    id: null,
    dsNome: '',
    dsCategory: ''
  });
};
