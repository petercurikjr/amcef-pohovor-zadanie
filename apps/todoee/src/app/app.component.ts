import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CoreContainer } from '@todoee/core';

@Component({
  selector: 'todoee-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends CoreContainer implements OnInit {
  constructor(private angularFireAuth: AngularFireAuth) {
    super();
  }

  ngOnInit(): void {
    this.angularFireAuth.onAuthStateChanged((user) => {
      if (user) this.facade.updateGoogleSignedInUser(Object.freeze(user));
    });
  }
}
