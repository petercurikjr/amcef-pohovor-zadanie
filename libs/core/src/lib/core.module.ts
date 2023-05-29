import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HiddenForDirective } from './directives/hidden-for.directive';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [HiddenForDirective, FormatDatePipe],
  providers: [DatePipe, FormatDatePipe],
  exports: [HiddenForDirective, FormatDatePipe],
})
export class CoreModule {}
