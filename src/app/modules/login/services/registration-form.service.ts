import { registrationFormProps } from './../../../shared/constants/registration-form';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../../../shared/services/form.service';

@Injectable()
export class RegistrationFormService extends FormService {
  private formProps = registrationFormProps;

  constructor(fb: FormBuilder) {
    super(fb);
    this.form$.next(this.createForm(this.formProps));
  }
}
