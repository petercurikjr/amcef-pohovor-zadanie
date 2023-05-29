import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore/firebase';
import { DateFormat } from '../models/app.model';
import { isToday } from 'date-fns';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
  constructor(private angularDatePipe: DatePipe) {}
  transform(
    timestamp?: Timestamp,
    dateFormat: DateFormat = DateFormat.FULL
  ): string {
    if (!timestamp) return '';
    const date = timestamp.toDate();

    if (dateFormat === DateFormat.COMMENT) {
      return isToday(date)
        ? this.angularDatePipe.transform(date, DateFormat.TIME)
        : this.angularDatePipe.transform(date, DateFormat.FULL);
    }
    return this.angularDatePipe.transform(date, dateFormat);
  }
}
