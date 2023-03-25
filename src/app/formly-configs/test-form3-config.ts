import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface TestForm3Model {
  style: string;
  size: string;
}

export class TestForm3Config {
  model: TestForm3Model;
  fieldConfigs: FormlyFieldConfig[];
  buttonText: string;

  constructor() {
    this.model = {
      style: '',
      size: '',
    };

    this.buttonText = 'Ok';

    this.fieldConfigs = [
      {
        focus: true,
        key: 'pantsStyle',
        type: 'input',
        props: {
          label: 'Pants Style',
          placeholder: 'Pants style',
          maxLength: 7,
          required: true,
        },
      },
      {
        key: 'inseam',
        type: 'select',
        props: {
          label: 'Inseam',
          placeholder: 'Inseam',
          required: true,
          options: [
            { label: '30', value: '30' },
            { label: '32', value: '32' },
            { label: '34', value: '34' },
            { label: '36', value: '36' },
            { label: '38', value: '38' },
          ],
        },
      },
      {
        key: 'length',
        type: 'select',
        props: {
          label: 'Length',
          placeholder: 'Length',
          required: true,
          options: [
            { label: '31 inches', value: '31' },
            { label: '33 inches', value: '33' },
            { label: '35 inches', value: '35' },
            { label: '37 inches', value: '37' },
            { label: '39 inches', value: '39' },
            { label: '41 inches', value: '41' },
          ],
        },
      },
      {
        key: 'color',
        type: 'select',
        props: {
          label: 'Color',
          placeholder: 'Color',
          required: true,
          options: [
            { label: 'Red', value: 'R' },
            { label: 'Pea Green', value: 'PG' },
            { label: 'Hunter Green', value: 'HG' },
            { label: 'Royal Blue', value: 'RB' },
            { label: 'Navy Blue', value: 'NB' },
            
          ],
        },
      },
    ];
  }
}
