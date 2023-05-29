import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  OnDestroy,
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { isArray } from 'lodash-es';

type Size = 'mobile' | 'tablet' | 'desktop';

const config = {
  mobile: '(max-width: 599px)',
  tablet: '(min-width: 600px) and (max-width: 839px)',
  desktop: '(min-width: 840px)',
};

@Directive({
  selector: '[hiddenFor]',
})
export class HiddenForDirective implements OnDestroy {
  private subscription = new Subscription();

  @Input('hiddenFor') set size(value: Size | Size[]) {
    this.subscription.unsubscribe();
    if (isArray(value)) {
      const breakpoints = (value as Size[]).map((d) => config[d]);
      this.subscription = this.observer
        .observe(breakpoints)
        .subscribe(this.updateView);
    } else {
      this.subscription = this.observer
        .observe(config[value as Size])
        .subscribe(this.updateView);
    }
  }

  constructor(
    private observer: BreakpointObserver,
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private cdr: ChangeDetectorRef
  ) {}

  updateView = (data: BreakpointState) => {
    const matches = data.matches;
    if (matches && this.vcRef.length) {
      this.vcRef.clear();
      this.cdr.markForCheck();
    } else if (!matches && !this.vcRef.length) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.cdr.markForCheck();
    }
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
