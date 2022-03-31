// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Batch } from 'src/app/models/batch.model';
import { CRUDService } from 'src/app/services/crud.service';

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

  batch: Batch = {
    name: '',
    startIccid: '',
    startImsi: '',
    count: 1,
    isActive: false,
  };
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    public crudService: CRUDService
  ) {}

  ngOnInit(): void {}

  createBatch(): void {
    const data = {
      name: this.batch.name,
      startIccid: this.batch.startIccid,
      startImsi: this.batch.startImsi,
      count: this.batch.count,
      isActive: this.batch.isActive,
    };

    this.crudService.create(data).subscribe({
      next: (res) => {
        console.log('res', res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newBatch(): void {
    this.submitted = false;
    this.batch = {
      name: '',
      startIccid: '',
      startImsi: '',
      count: 0,
      isActive: false,
    };
  }

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
