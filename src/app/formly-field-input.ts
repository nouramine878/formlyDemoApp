import {Component} from "@angular/core";
import {FieldType, FieldTypeConfig} from "@ngx-formly/core";

@Component({
  selector: 'formly-field-input',
  template: `
   <input nz-input [formControl]="formControl" [formlyAttributes]="field">
 `,
})
export class FormlyFieldInput extends FieldType<FieldTypeConfig> {}
