import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Curso} from "../../model/curso";
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { DataViewModule } from 'primeng/dataview';

@Component({
    selector: 'app-cursos-list',
    templateUrl: './cursos-list.component.html',
    styleUrls: ['./cursos-list.component.scss'],
    standalone: true,
    imports: [DataViewModule, SharedModule, ButtonModule, RouterLink, NgClass, CategoryPipe]
})
export class CursosListComponent{

  @Input() cursos: Curso[] = [];
  @Output() retornoDelete = new EventEmitter;

  deleteCurso(id: number){
    this.retornoDelete.emit(id);
  }
}
