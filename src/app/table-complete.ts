import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
// import { table } from 'console';
import { Observable } from 'rxjs';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Country, Sim } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { TableService } from './table.service';

@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './table-complete.html',
  providers: [CountryService, DecimalPipe, TableService],
})
export class NgbdTableComplete {
  sims$: Observable<Sim[]>;
  // countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(
    public service: CountryService,
    public tableService: TableService
  ) {
    this.sims$ = service.sims$;
    // this.countries$ = service.countries$;
    this.total$ = service.total$;
  }
}
// onSort({ column, direction }: SortEvent) {
//   // resetting other headers
//   this.headers.forEach((header) => {
//     if (header.sortable !== column) {
//       header.direction = '';
//     }
//   });

//   this.service.sortColumn = column;
//   this.service.sortDirection = direction;
// }
