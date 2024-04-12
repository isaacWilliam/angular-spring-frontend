import {Component} from '@angular/core';
import {CursoService} from "../../services/curso.service";
import {catchError, map, Observable, of, Subject, take, tap} from "rxjs";
import {Message} from "primeng/api";
import {MessageLayoutService} from "../../../shared/services/message.layout.service";
import {CursoPage} from "../../model/curso-page";
import { AsyncPipe } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';
import { CursosListComponent } from '../../components/cursos-list/cursos-list.component';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.scss'],
    standalone: true,
    imports: [CursosListComponent, PaginatorComponent, MessagesModule, ProgressSpinnerModule, AsyncPipe]
})

export class CursosComponent{

  cursos$: Observable<CursoPage> | null = null;
  error$ = new Subject<boolean>();
  messages: Message[] = [
    {
      severity: 'error',
      summary: 'Erro de Requisição',
      detail: 'Algo deu errado, volte a página inicial e verifique com nossos técnicos'
    }
  ]

  constructor(
    private cursoService: CursoService,
    private messageLayoutService: MessageLayoutService
  ) {
    // setTimeout((e: any) => {
      this.listar();
    // }, 5000)
  }

  deleteCurso(id: number){
    this.cursoService.delete(id).subscribe(response => {this.showSimpleToast('success', 'Sucesso', 'Curso removido com sucesso.'); this.listar()});
  }

  showConfirm(event: Event){
    this.messageLayoutService.confirmDilalog({header: 'Confirmar exclusão', message: 'Deseja continuar o processo?', icon: 'pi pi-exclamation-triangle text-orange-500'}).pipe(
      map(result => {
        if (result) {
          this.deleteCurso(Number(event));
        }
      }),
      take(1)).subscribe();
  }

  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

  listar(page: number = 0){
    this.cursos$ = this.cursoService.list(page).pipe(
      tap(() => {
      }),
      catchError(err => {
        this.error$.next(true);
        return of({cursos: [],page: 0, size:0, totalPages: 0, totalElements: 0});
      }),
    )

  }

}
