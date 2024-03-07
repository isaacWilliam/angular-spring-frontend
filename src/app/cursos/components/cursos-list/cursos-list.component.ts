import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent {

  @Input() cursos = [];
  @Output() retornoDelete = new EventEmitter;

  deleteCurso(id: number){
    this.retornoDelete.emit(id);
  }
}
