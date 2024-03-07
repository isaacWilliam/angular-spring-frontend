import {Component, OnInit} from '@angular/core';
import {Curso} from "../../model/curso";
import {CursoService} from "../../services/curso.service";
import {catchError, map, Observable, of, Subject, take} from "rxjs";
import {Message} from "primeng/api";
import {MessageLayoutService} from "../../../shared/services/message.layout.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})

export class CursosComponent{

  cursos$: Observable<any> | null = null;
  // cursos: Curso[] = [];
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
    this.listar();
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

  listar(){
    this.cursos$ = this.cursoService.list().pipe(
      catchError(err => {
        this.error$.next(true);
        // this.showSimpleToast('error', 'Falha!!', 'Sua requisição não foi concluída.')
        console.log(err);
        // return empty();
        return of();
      }),
    )
    // this.cursoService.list().subscribe(response => {this.cursos = response});
  }

}
