import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Sims } from './sims.interface';
import { SimsService } from '../services/sims.service';

@Component({
  selector: 'app-sims',
  templateUrl: './sims.component.html',
  providers: [SimsService],
  styleUrls: ['./sims.component.css'],
})
export class SimsComponent implements OnInit {
  sims: any = {};
  editSim: Sims | undefined;
  simName = '';

  constructor(private simsService: SimsService) {}

  @ViewChild('simEditInput')
  set simEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {
    this.getSims();
  }

  getSims(): void {
    this.simsService.getSims().subscribe((sims) => (this.sims = sims));
    console.log('this.sims', this.sims);
  }
}
