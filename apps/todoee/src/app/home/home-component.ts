import { Component } from '@angular/core';
import { CoreContainer } from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';
import { User } from 'firebase/auth';

@Component({
  selector: 'todoee-home-component',
  templateUrl: './home-component.html',
})
export class HomeComponent extends CoreContainer {
  readonly UiButtonType = UiButtonType;
  readonly Icons = Icons;

  signedInUser: User;

  constructor() {
    super();
    this.subscriptions.add(
      this.facade.getSignedInUser$.subscribe(
        (user) => (this.signedInUser = user?.user)
      )
    );
  }

  signInWithGoogle(): void {
    this.facade.signInWithGoogle();
  }

  signOut(): void {
    this.facade.signOutWithGoogle();
  }
}
