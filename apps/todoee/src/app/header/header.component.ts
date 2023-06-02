import { Component } from '@angular/core';
import { CoreContainer, Routes } from '@todoee/core';
import { UiButtonType } from '@todoee/ui';
import { User } from 'firebase/auth';

@Component({
  selector: 'todoee-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends CoreContainer {
  readonly UiButtonType = UiButtonType;
  readonly Routes = Routes;

  signedInUser: User;

  constructor() {
    super();
    this.subscriptions.add(
      this.facade.getSignedInUser$.subscribe(
        (user) => (this.signedInUser = user?.user)
      )
    );
  }

  signOut(): void {
    this.facade.signOutWithGoogle();
  }
}
