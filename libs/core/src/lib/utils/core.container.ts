import { Directive, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AppFacade } from '../store/app.facade';

@Directive()
export class CoreContainer implements OnDestroy {
  readonly router: Router = inject(Router);
  readonly fb: FormBuilder = inject(FormBuilder);
  readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  readonly facade: AppFacade = inject(AppFacade);

  subscriptions = new Subscription();

  navigateTo(url: string, queryParams?: Params): void {
    this.router.navigate([url], { queryParams: queryParams });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
