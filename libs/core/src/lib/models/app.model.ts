import { Timestamp } from 'firebase/firestore';

export interface AppEntity {
  id: string;
  name: string;
}

export enum DateFormat {
  FULL = 'dd.MM.yyyy, HH:mm',
  DATE = 'dd.MM.yyyy',
  TIME = 'HH:mm',
}

export interface ITodoList {
  id: string;
  name: string;
  todos: ITodoItem[];
}

export interface ITodoItem {
  id: string;
  listId: string;
  name: string;
  description: string;
  isCompleted: boolean;
  due: Timestamp;
}

export enum FilterType {
  ALL,
  ACTIVE,
  COMPLETED,
}
