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

    this.fieldConfigs = [ { 
        fieldGroupClassName: 'display-flex',
        fieldGroup: [  {
          className: 'flex-1 input-email',
          focus: true,
          key: 'email',
          type: 'input',
          props: {
            label: 'EMail',
            placeholder: 'you@company.com',
            required: true,
            type: 'email'
          },
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
        },  {
          className: 'flex-1 input-password',
          key: 'password',
          type: 'input',
          props: {
            label: 'password',
            minLength: 5,
            placeholder: 'password',
            required: true,
          },
          validation: {
            messages: {
              minlength: `The password has to be longer.`,
              required: `Please enter a password.`,
            },
          },
        }]
      },
        // {
        //   template: '<hr />',
        // },
      { fieldGroupClassName: 'display-flex',
        fieldGroup: [  {
          className: 'flex-2 ',
          key: 'firstName',
          type: 'input',
          props: {
            label: 'First Name',
            placeholder: 'First Name',
            required: true,
          },
        }, {
          className: 'flex-2 ',
          key: 'lastName',
          type: 'input',
          props: {
            label: 'Last name',
            placeholder: 'Last Name',
            required: false,
          },
          
        }
       ]
     }, {
      fieldGroup: [  {
        className: 'flex-2 ',
        key: 'isMarried',
        type: 'checkbox',
        props: {
          label: 'Married?',
        }
      } ]
    }]
  }
}

