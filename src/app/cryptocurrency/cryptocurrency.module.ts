import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptocurrencyRoutingModule } from './cryptocurrency-routing.module';
import { CryptocurrencyComponent } from './components/cryptocurrency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NumericIntegerDirective } from './directives/numeric-integer.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CryptocurrencyComponent, NumericIntegerDirective],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    CryptocurrencyRoutingModule,
    NgbModule 
  ],
  exports: [

    NumericIntegerDirective
  ]
})
export class CryptocurrencyModule { }
