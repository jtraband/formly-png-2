import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { AppComponent } from './app.component';
import { FormComponent } from './dynamic-form.component';
import { TestForm1Component } from './test-form1.component';
import { PasswordComponent } from './custom-field-types/password.component';

@NgModule({
  declarations: [
    AppComponent, FormComponent, TestForm1Component, PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    FormsModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    FormlyPrimeNGModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
