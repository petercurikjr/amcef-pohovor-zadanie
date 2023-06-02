import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { CoreModule } from '@todoee/core';
import { UiIconComponent } from './components/ui-icon/ui-icon.component';
import { UiLoadingComponent } from './components/ui-loading/ui-loading.component';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { UiDatepickerComponent } from './components/ui-datepicker/ui-datepicker.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiTimepickerComponent } from './components/ui-timepicker/ui-timepicker.component';
import { UiModalComponent } from './components/ui-modal/ui-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UiButtonComponent,
    UiIconComponent,
    UiLoadingComponent,
    UiInputComponent,
    UiDatepickerComponent,
    UiTimepickerComponent,
    UiModalComponent,
  ],
  exports: [
    UiButtonComponent,
    UiIconComponent,
    UiLoadingComponent,
    UiInputComponent,
    UiDatepickerComponent,
    UiTimepickerComponent,
    UiModalComponent,
  ],
})
export class UiModule {}
