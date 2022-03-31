import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSimsModalComponent } from './add-sims-modal/add-sims-modal.component';

@Component({
  selector: 'app-add-sims',
  templateUrl: './add-sims.component.html',
})
export class AddSimsComponent {
  // model = 1;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(AddSimsModalComponent);
    // modalRef.componentInstance.name = 'World';
  }
}

// export class AddSimsComponent implements OnInit {
//   constructor() {}

// ngOnInit(): void {}
