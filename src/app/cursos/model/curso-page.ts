import {Curso} from "./curso";

export interface CursoPage {
  cursos: Curso[];
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}
