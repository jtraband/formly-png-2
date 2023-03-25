import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AppComponent } from './app.component';
import { FormComponent } from './dynamic-form.component';
import { TestForm1Component } from './test-form1.component';
import { PasswordComponent } from './custom-field-types/password.component';
import { FormlyFieldMultiSelect } from './custom-field-types/multiselect.component';


import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {FormlyDatepickerModule} from '@ngx-formly/primeng/datepicker';
import {CardModule} from 'primeng/card';


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

