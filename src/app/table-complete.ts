import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Country } from './country';
import { CountryService } from './country.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { TableService } from './table.service';

@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './table-complete.html',
  providers: [CountryService, DecimalPipe, TableService],
})
export class NgbdTableComplete {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button
//         type="button"
//         class="btn-close"
//         aria-label="Close"
//         (click)="activeModal.dismiss('Cross click')"
//       ></button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{ name }}!</p>
//     </div>
//     <div class="modal-footer">
//       <button
//         type="button"
//         class="btn btn-outline-dark"
//         (click)="activeModal.close('Close click')"
//       >
//         Close
//       </button>
//     </div>
//   `,
// })
// export class NgbdModalContent {
//   @Input() name: any;

//   constructor(public activeModal: NgbActiveModal) {}
// }

// @Component({
//   selector: 'ngbd-modal-component',
//   templateUrl: './modal-component.html',
// })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) {}

//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'World';
//   }
// }
