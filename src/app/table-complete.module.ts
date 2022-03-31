import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { NgbdSortableHeader } from './sortable.directive';
import { NgbdTableComplete } from './table-complete';
import {
  AddSimsComponent,
  // NgbdModalContent,
} from './add-sims/add-sims.component';
import { AddSimsModalComponent } from './add-sims/add-sims-modal/add-sims-modal.component';
import { ConfigComponent } from './config/config.component';
import { HeroesComponent } from './sims/sims.component';
import { HttpErrorHandler } from './http-error-handler.service';
// import { SimsComponent } from './countries';

@NgModule({
  declarations: [
    NgbdTableComplete,
    NgbdSortableHeader,
    AddSimsComponent,
    // NgbdModalContent,
    AddSimsModalComponent,
    // AddSimsComponent
    ConfigComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  exports: [NgbdTableComplete],
  providers: [HttpErrorHandler],
  bootstrap: [NgbdTableComplete],
})
export class NgbdTableCompleteModule {}
