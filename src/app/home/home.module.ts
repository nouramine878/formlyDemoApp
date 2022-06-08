import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormlyModule} from "@ngx-formly/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormlyBootstrapModule} from "@ngx-formly/bootstrap";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormlyBootstrapModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'champ obligatoire'}
      ]
    }),
  ],
})
export class HomeModule { }
