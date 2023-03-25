import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';   
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';
import {SelectItem} from 'primeng/api';
import { FormlyFieldProps } from '@ngx-formly/primeng/form-field';
import { FormlyFieldSelectProps } from '@ngx-formly/core/select';

// interface SelectProps extends FormlyFieldProps, FormlyFieldSelectProps {}

@Component({
  selector: 'formly-field-multiselect',
  template: `<br><p-multiSelect  
      [formControl]="formControl"
      [options]= "props['xoptions']"
      optionLabel="label",
      optionValue="value"      
      
      >
    </p-multiSelect>
  `,
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldMultiSelect extends FieldType<FieldTypeConfig> {}

