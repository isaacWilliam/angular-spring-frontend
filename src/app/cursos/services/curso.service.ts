import { Injectable } from '@angular/core';
import {Curso} from "../model/curso";
import {HttpClient} from "@angular/common/http";
import {delay, first, take} from "rxjs";
import {CursoPage} from "../model/curso-page";
import {PaginatorState} from "primeng/paginator";

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  API_URL = 'api/cursos';

  constructor(
    private http: HttpClient
  ) { }

  list(page: number = 0, pageSize = 10) {
    console.log(page)
    return this.http.get<CursoPage>(this.API_URL, {params: {page, pageSize: pageSize}}).pipe(first());
  }

  create(curso: Partial<Curso>){
    return this.http.post<Curso>(this.API_URL, curso).pipe(first());
  }

  getCursoById(id: any){
    return this.http.get<Curso>(`${this.API_URL}/${id}`).pipe(first());
  }

  update(curso: Curso){
    return this.http.put<Curso>(`${this.API_URL}/${curso.id}`, curso).pipe(first());
  }

  save(curso: Curso){
    if(curso.id) return this.update(curso);
    return this.create({dsNome: curso.dsNome, nmCategory: curso.nmCategory, aulas: curso.aulas});
  }

  delete(id: number){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(first());
  }

}
