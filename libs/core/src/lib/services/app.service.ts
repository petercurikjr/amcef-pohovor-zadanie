import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { GoogleAuthProvider, UserCredential } from '@angular/fire/auth';
import { ITodoList } from '../models/app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private afs: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {}

  public signInWithGoogle(): Observable<UserCredential> {
    return from(
      this.angularFireAuth.signInWithPopup(new GoogleAuthProvider())
    ) as Observable<any>;
  }

  public signOutWithGoogle(): void {
    this.angularFireAuth.signOut();
  }

  public fetchTodoLists(): Observable<ITodoList[]> {
    return this.afs.collection('todoee-todolists').valueChanges() as Observable<
      ITodoList[]
    >;
  }

  public modifyTodoList(todoList: ITodoList): Observable<void> {
    return from(this.afs.doc(`todoee-todolists/${todoList.id}`).set(todoList));
  }
}
