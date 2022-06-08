import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions} from "@ngx-formly/core";
import {SkillsService} from "./skills.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularFormlyTuto';
  // form = new FormGroup({});
  // model = {}
  //
  // // @ts-ignore
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email Adresse',
  //       placeholder: 'enter email',
  //       required: true,
  //       minLength: 10
  //     }
  //   },
  //   {
  //     key: 'username',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'username',
  //       placeholder: 'set your username',
  //       required: true,
  //       minLength: 10,
  //     }
  //   },
  //   {
  //     key: 'host ip',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'host ip',
  //       placeholder: 'set your host ip ',
  //       pattern: /(\d{1,3}\.){3}\d{1,3}/,
  //       required: true,
  //       minLength: 10,
  //       maxLength:20
  //     },
  //     validation: {
  //       messages: {
  //         pattern: (error, field: FormlyFieldConfig) => `"${ field.formControl?.value}" is not a valid IP Address`,
  //       }
  //     }
  //   },
  //   {
  //     key: 'skills',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'skills',
  //       placeholder: 'select your skills',
  //       required: true,
  //       options: this.dataService.getSkills()
  //     }
  //   },
  //   {
  //     key: 'Male',
  //     type: 'checkbox',
  //     templateOptions: {
  //       label: 'Male',
  //     },
  //     hideExpression: '!model.username'
  //   },
  //   {
  //     key: 'Female',
  //     type: 'checkbox',
  //     templateOptions: {
  //       label: 'Female',
  //     },
  //     hideExpression: '!model.username'
  //   }
  // ]
  //
  // constructor(private dataService: SkillsService) {}
  //
  // onSubmit() {
  //   console.log(this.form.value)
  // }




  // bootstrap ngx-formly


  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
            required: true
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
            required: true
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      className: 'section-label',
      template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
            required: true
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
            required: true
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
            required: true
          },
        },
      ],
    },
    { template: '<hr />' },
    {
      type: 'textarea',
      key: 'otherInput',
      templateOptions: {
        label: 'Other Input',
        required: true
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox',
        required: true
      },
    },
  ];

  submit() {
    console.log(this.form.value)
  }
}
