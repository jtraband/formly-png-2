import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmailValidator } from '../validators/email-validator'

export interface TestForm1Model {
  email: string;
  password: string;
}

export class TestForm1Config {
  model: TestForm1Model;
  fieldConfigs: FormlyFieldConfig[];
  buttonText: string;

  constructor() {
    this.model = {
      email: '',
      password: '',
    };

    this.buttonText = 'Login';

    this.fieldConfigs = [
      {
        className: 'input-email',
        focus: true,
        key: 'email',
        templateOptions: {
          placeholder: 'you@company.com',
          required: true,
          type: 'email',
        },
        type: 'input',
        validation: {
          messages: {
            required: `Please enter an email address.`,
          },
        },
        validators: {
          email: {
            expression: (c: FormControl) => EmailValidator(c),
            message: 'Please enter a valid email address.',
          },
        },
      },
      {
        className: 'input-password',
        key: 'password',
        templateOptions: {
          minLength: 5,
          placeholder: 'password',
          required: true,
          type: 'input',
        },
        type: 'input',
        validation: {
          messages: {
            minlength: `The password has to be longer.`,
            required: `Please enter a password.`,
          },
        },
      },
    ];
  }
}
