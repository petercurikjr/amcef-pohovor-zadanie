import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injector,
  OnDestroy,
  Self,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroupDirective,
  NgControl,
  UntypedFormControl,
} from '@angular/forms';
import { fromEvent, merge, Subscription } from 'rxjs';
import {
  customFormErrorMessages,
  generalFormErrorMessages,
} from './form-error-message';

@Directive()
export abstract class UiFormControlContainer
  implements ControlValueAccessor, AfterViewInit, OnDestroy
{
  errorMessage: string;

  protected subscription = new Subscription();

  @ViewChild('element', { static: true }) element: ElementRef | undefined;

  constructor(
    @Self() public ngControl: NgControl,
    public formGroupDirective: FormGroupDirective,
    public cdr: ChangeDetectorRef
  ) {
    this.ngControl.valueAccessor = this;
  }

  get control(): UntypedFormControl {
    return this.ngControl.control as UntypedFormControl;
  }

  ngAfterViewInit(): void {
    if (!this.control) return;
    const formSubmit$ = this.formGroupDirective.ngSubmit.asObservable();
    const observables = [this.control.statusChanges, formSubmit$];

    if (this.element) {
      observables.push(fromEvent(this.element.nativeElement, 'blur'));
    }

    this.subscription.add(
      merge(...observables).subscribe(() => {
        this.errorMessage =
          this.control.status === 'INVALID' ? this.getErrorMessage() : '';
        this.cdr.markForCheck();
      })
    );
    this.subscription.add(
      formSubmit$.subscribe(() => this.control.markAsTouched())
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getErrorMessage(): string {
    const code = Object.keys(this.control.errors || {}).shift() as string;
    const messages =
      customFormErrorMessages[(this.ngControl.name as string) || ''];

    if (messages && messages[code]) {
      return messages[code];
    } else if (generalFormErrorMessages[code]) {
      return generalFormErrorMessages[code];
    } else {
      return '';
    }
  }

  protected onChange: any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  writeValue(value: string): void {}
}
