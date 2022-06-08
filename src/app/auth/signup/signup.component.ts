import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({});
  model: any = {
    fullName: 'nour'
  }
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        {name: 'fieldMatch', options: {errorPath: 'passwordConfirm'}},
      ]
    },

    fieldGroup: [
      {
        type: 'input',
        key: 'fullName',
        templateOptions: {
          label: 'Full Name',
          required: true,
          placeholder: 'set your full name'
        }
      },
      {
        // type: 'input',
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email',
          required: true,
          placeholder: 'set your email'
        }
      },
      {
        type: 'input',
        key: 'password',
        templateOptions: {
          type: 'password',
          label: 'Password',
          required: true,
          minLength: 3,
          placeholder: 'set your password'
        }
      },
      {
        type: 'input',
        key: 'passwordConfirm',
        templateOptions: {
          type: 'password',
          label: 'Confirm Password',
          placeholder: 'please re-enter your password',
          required: true
        }
      }
    ]
  },
  ]

  onSubmit() {
    console.log(this.form.value);
  }

}
