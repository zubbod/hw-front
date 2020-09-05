import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { loginFormProps } from './../../../shared/constants/loginForm';
import { ILoginFormProps } from './../../../shared/interfaces/login-form-props.interface';

@Injectable()
export class LoginFormService {

  form$: BehaviorSubject<FormGroup> = new BehaviorSubject(null);
  private formProps = loginFormProps;

  constructor(
    private fb: FormBuilder
  ) {
    this.form$.next(this.createLoginForm(this.formProps));
  }

  private createLoginForm(props: Record<string, ILoginFormProps>): FormGroup {
    return this.fb.group(Object.entries(props).reduce((acc, current) => {
      Object.assign(acc, { [current[0]]: [props[current[0]].controlValue, [...props[current[0]].validators]] });
      return acc;
    }, {}));
  }

}