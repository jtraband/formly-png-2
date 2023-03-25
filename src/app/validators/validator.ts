import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function EmailValidator(control: FormControl): boolean {
  return control.value.match(
    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  );
}

export function StyleValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid Style`;
}

export function StyleValidator(control: AbstractControl): ValidationErrors {
  return /SK-.*/.test(control.value) ? {} : { 'style': true };
}