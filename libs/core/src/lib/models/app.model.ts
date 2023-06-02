import { Timestamp } from 'firebase/firestore';

export interface AppEntity {
  id: string;
  name: string;
}

export enum DateFormat {
  FULL = 'dd.MM.yyyy, HH:mm',
  DATE = 'dd.MM.yyyy',
  DAY_MONTH = 'dd.MM.',
  TIME = 'HH:mm',
  COMMENT = 'COMMENT',
}

export interface ITodoList {
  id: string;
  name: string;
  todos: ITodo[];
}

export interface ITodo {
  id: string;
  name: string;
  description: string;
  due: Timestamp;
}
