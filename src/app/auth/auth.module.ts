import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import {AbstractControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";
import {HomeRoutingModule} from "../home/home-routing.module";
import {FormlyFieldConfig, FormlyModule} from "@ngx-formly/core";

export function minlengthValidationMessages(err:any, field:any) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function fieldMatchValidator(control: AbstractControl) {
  const {password, passwordConfirm} = control.value

  if(!passwordConfirm || !password) {
    return null
  }

  if (passwordConfirm === password) {
    return null
  }

  return { fieldMatch: { message: 'Password Not Matching'} };
}
@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    FormlyBootstrapModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'fieldMatch', validation: fieldMatchValidator},
      ],
      validationMessages: [
        { name: 'required', message: 'this field is necesserally required'},
        { name: 'minlength', message: minlengthValidationMessages}
      ]
    }),
  ]
})
export class AuthModule { }
