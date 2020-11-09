import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { loginFormProps } from './../../../shared/constants/loginForm';
import { FormService } from '../../../shared/services/form.service';

@Injectable()
export class LoginFormService extends FormService {
  private formProps = loginFormProps;

  constructor(fb: FormBuilder) {
    super(fb);
    this.form$.next(this.createForm(this.formProps));
  }
}
