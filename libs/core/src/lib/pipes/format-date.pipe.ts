import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore/firebase';
import { DateFormat } from '../models/app.model';

@Pipe({ name: 'formatDate' })
export class FormatDatePipe implements PipeTransform {
  constructor(private angularDatePipe: DatePipe) {}
  transform(timestamp?: Timestamp): string {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return this.angularDatePipe.transform(date, DateFormat.FULL);
  }
}
