import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AppComponent } from './app.component';
import { FormComponent } from './dynamic-form.component';
import { TestForm1Component } from './test-form1.component';
import { PasswordComponent } from './custom-field-types/password.component';
import { FormlyFieldMultiSelect } from './custom-field-types/multiselect.component';


import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule} from 'primeng/multiselect';
import { FormlyDatepickerModule} from '@ngx-formly/primeng/datepicker';

import { CardModule} from 'primeng/card';
import { StyleValidator, StyleValidatorMessage } from './validators/validator';


@NgModule({
  declarations: [
    AppComponent, FormComponent, TestForm1Component, FormlyFieldMultiSelect, PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FormlyModule.forRoot( {
      types: [
        { name: 'multiselect', component: FormlyFieldMultiSelect },
        { name: 'styleInput',
          extends: 'input',
          defaultOptions: {
            validators: {
              style: {
                expression: (c: AbstractControl) => !c.value || /SK-.*/.test(c.value),
                message: (error: any, field: FormlyFieldConfig) => `"${field.formControl?.value}" is not a valid Style - must begin with SK-`,
              },
            },
          },
        },
      ],
    }),
    ReactiveFormsModule,
    FormlyPrimeNGModule,
    CardModule,
    DropdownModule,
    MultiSelectModule,
    FormlyDatepickerModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

