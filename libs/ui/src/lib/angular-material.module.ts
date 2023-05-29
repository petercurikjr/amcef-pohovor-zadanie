import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDateFormats,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { sk } from 'date-fns/esm/locale';

const DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'dd.MM.yyyy',
  },
  display: {
    dateInput: 'dd.MM.yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@NgModule({
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDateFnsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
  ],
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDateFnsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: sk },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class AngularMaterialModule {}
