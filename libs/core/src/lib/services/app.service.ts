import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { GoogleAuthProvider, User, UserCredential } from '@angular/fire/auth';

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
}
