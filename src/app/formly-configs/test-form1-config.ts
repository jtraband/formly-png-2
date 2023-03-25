import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmailValidator } from '../validators/email-validator';
import { DataService } from '../data-service';

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
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-3 input-email',
            focus: true,
            key: 'email',
            type: 'input',
            props: {
              label: 'EMail',
              placeholder: 'you@company.com',
              required: true,
              type: 'email',
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
          },
          {
            className: 'flex-3 input-password',
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
          },
          {
            className: 'flex-3 ',
            key: 'twoFactor',
            type: 'checkbox',
            props: {
              label: 'Two Factor Authentication?',
            },
          },
        ],
      },
      // {
      //   template: '<hr />',
      // },
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            className: 'flex-3',
            key: 'notes',
            type: 'textarea',
            props: {
              maxlength: 400,
              label: 'Notes',
              placeholder: 'Notes',
              required: true,
            },
          },
          {
            className: 'flex-3',
            key: 'wearOptions',
            type: 'select',
            props: {
              label: 'Wear Options',
              placeholder: 'Wear Options',
              required: true,
              multiple: true, // doesn't do anything for Primeng
              enableSelectAll: true,
              options: [
                { label: 'Clip On', value: 'CO' },
                { label: 'Detachable', value: 'D' },
                { label: 'Resizable', value: 'RS' },
                { label: 'Waterproof', value: 'WP' },
              ],
            },
          },
          {
            className: 'flex-3',
            key: 'deliveryDt',
            type: 'datepicker',
            props: {
              label: 'Delivery Date',
              placeholder: 'Delivery Date',
              required: false,
              datePickerOptions: {
                monthNavigator: 'true',
                showIcon: 'true',
                inline: 'true',
                dateFormat: 'dd/mm/yy',
                defaultDate: new Date(Date.now()),
              },
            },
          },
        ],
      },
    ];
  }
}
