import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FormatDatePipe],
  providers: [DatePipe, FormatDatePipe],
  exports: [FormatDatePipe],
})
export class CoreModule {}
