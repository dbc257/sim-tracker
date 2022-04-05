import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
// import { table } from 'console';
import { Observable } from 'rxjs';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Sim } from './sim';
import { SimService } from './services/sim.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { TableService } from './services/table.service';

@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './table-complete.html',
  providers: [SimService, DecimalPipe, TableService],
})
export class NgbdTableComplete {
  sims$: Observable<Sim[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: SimService, public tableService: TableService) {
    this.sims$ = service.sims$;
    this.total$ = service.total$;
  }
}
