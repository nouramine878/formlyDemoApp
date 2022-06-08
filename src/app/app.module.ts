import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormlyNgZorroAntdModule} from "@ngx-formly/ng-zorro-antd";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {FormlyFieldInput} from "./formly-field-input";
import {NzInputModule} from "ng-zorro-antd/input";
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

registerLocaleData(fr);

export function minCaractereValidator(err: any, field: any){
  return `This value should be more than ${field.templateOptions.minLength}`;
}
export function maxCaractereValidator(err: any, field: any){
  return `This value should be less than ${field.templateOptions.maxLength}`;
}

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FormlyFieldInput
  ],
  imports: [
    BrowserModule,
    FormlyBootstrapModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [{
        name: 'customInput', component: FormlyFieldInput
      }],
      validationMessages: [
        {name: 'required', message: 'This field is required'},
        {name: 'minlength', message: minCaractereValidator },
        {name: 'maxlength', message: maxCaractereValidator }
      ],
    }),
    NzButtonModule,
    NzGridModule,
    NzSpaceModule,
    NzInputModule

  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
