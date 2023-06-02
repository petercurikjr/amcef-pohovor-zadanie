import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isBefore, isValid, startOfDay } from 'date-fns/esm';
import isDate from 'date-fns/isDate';
import parse from 'date-fns/parse';

export const FormControlValidators = {
  dateFromThePastValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control?.value) return null;
      const dateStart = control.value;
      const dateNow = startOfDay(new Date());

      return isBefore(dateStart, dateNow) ? { dateFromThePast: true } : null;
    };
  },

  invalidDateFormatValidator(format: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control?.dirty || !control?.value) return null;
      if (isDate(control.value))
        return isValid(control.value) ? null : { invalidValue: true };
      return isValid(parse(control.value, format, new Date()))
        ? null
        : { invalidValue: true };
    };
  },
};
