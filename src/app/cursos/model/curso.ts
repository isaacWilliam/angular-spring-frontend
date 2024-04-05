import {Aula} from "./aula";

export interface Curso {
  id: null;
  dsNome: string;
  nmCategory: string;
  fgStatus: string;
  aulas?: Aula[];
}
