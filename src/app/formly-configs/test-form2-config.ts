import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


export interface TestForm2Model {
  style: string;
  password: string;
}

export class TestForm2Config {
  model: TestForm2Model;
  fieldConfigs: FormlyFieldConfig[];
  buttonText: string;

  constructor() {
    this.model = {
      style: '',
      password: '',
    };

    this.buttonText = 'Process';

    this.fieldConfigs = [ { 
        fieldGroupClassName: 'display-flex',
        fieldGroup: [  {
          className: 'flex-2',
          focus: true,
          key: 'style',
          type: 'input',
          props: {
            label: 'Style',
            placeholder: 'Style name',
            required: true,
          },
        },  {
          className: 'flex-2',
          key: 'size',
          type: 'input',
          props: {
            label: 'Size',
            minLength: 5,
            placeholder: 'Size',
            required: true,
          },
        }]
      },
        
      { fieldGroupClassName: 'display-flex',
        fieldGroup: [  {
          className: 'flex-2' ,
          key: 'firstName',
          type: 'input',
          props: {
            type: 'text',
            maxlength: 7,
            label: 'First Name 2',
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
          
        } ]
      } 
    ];
  }
}
  
