import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSimsModalComponent } from './add-sims-modal/add-sims-modal.component';

@Component({
  selector: 'app-add-sims',
  templateUrl: './add-sims.component.html',
})
export class AddSimsComponent {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  open() {
    const modalRef = this.modalService.open(AddSimsModalComponent);
  }
}
