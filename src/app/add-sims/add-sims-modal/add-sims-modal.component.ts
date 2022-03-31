// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sims-modal',
  templateUrl: './add-sims-modal.component.html',
})
export class AddSimsModalComponent implements OnInit {
  // @Input() name: string;
  name: string | undefined;
  iccid: number | undefined;
  imsi: number | undefined;
  count: number | undefined;
  active: boolean | undefined;
  // addSimsForm: FormGroup | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
  addSimsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    iccid: new FormControl(
      '',
      // Validators.required
      Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(20),
      ])
    ),
    imsi: new FormControl(
      '',
      // Validators.required
      Validators.compose([
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(15),
      ])
    ),
    count: new FormControl(
      '',
      // Validators.required
      Validators.compose([
        Validators.required,
        Validators.max(25),
        Validators.min(1),
        Validators.maxLength(2),
        Validators.minLength(1),
      ])
    ),
    active: new FormControl(false),
  });

  onSubmit() {
    console.log('Submitted', this.addSimsForm);
    this.activeModal.close('Close click');
  }
}

// export class NgbdModalContent {
//   @Input() name: any;

//   constructor(public activeModal: NgbActiveModal) {}
// }
