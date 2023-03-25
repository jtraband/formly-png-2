import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


export interface TestForm2Model {
  style: string;
  size: string;
}

export class TestForm2Config {
  model: TestForm2Model;
  fieldConfigs: FormlyFieldConfig[];
  buttonText: string;

  constructor() {
    this.model = {
      style: '',
      size: ''
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
            maxLength: 7,
            required: true,
          },
        },  {
          className: 'flex-2',
          key: 'size',
          type: 'select',
          props: {
            label: 'Size',
            placeholder: 'Size',
            required: true,
            options: [
              { label: 'Small', value: 'S' },
              { label: 'Medium', value: 'M' },
              { label: 'Large', value: 'L' },
              { label: 'Extra Large', value: 'XL' },
            ],
          },
        }]
      },
        
      { fieldGroupClassName: 'display-flex',
        fieldGroup: [  {
          className: 'flex-2' ,
          key: 'embellishment',
          type: 'input',
          props: {
            type: 'text',
            maxlength: 7,
            label: 'Embellishment',
            placeholder: 'Embellishment',
            required: false,
          },
        }, {
          className: 'flex-2 ',
          key: 'logo',
          type: 'input',
          props: {
            label: 'Logo',
            placeholder: 'Logo',
            required: false,
          },
          
        } ]
      } 
    ];
  }
}
  
