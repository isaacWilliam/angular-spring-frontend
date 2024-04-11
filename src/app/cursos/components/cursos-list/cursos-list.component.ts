import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Curso} from "../../model/curso";

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent {

  @Input() cursos: Curso[] = [];
  @Output() retornoDelete = new EventEmitter;

  deleteCurso(id: number){
    this.retornoDelete.emit(id);
  }
}
