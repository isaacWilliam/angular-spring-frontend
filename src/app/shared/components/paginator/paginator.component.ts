import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { PaginatorState, PaginatorModule } from "primeng/paginator";

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
    standalone: true,
    imports: [PaginatorModule]
})

export class PaginatorComponent implements OnChanges{

  @Input() totalPages: number = 0;
  @Input() totalRecord: number = 0;
  @Input() pageAtual: number = 0;
  @Output() pageChange = new EventEmitter();

  first = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.first = this.pageAtual * 10;
  }

  onPageChange(ev: any) {
    if (this.pageAtual === ev.page) return;
    this.pageChange.emit(ev.page);
  }

}
