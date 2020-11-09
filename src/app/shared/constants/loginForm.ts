import { IFormProps } from '../interfaces/login-form-props.interface';
import { Validators } from '@angular/forms';

export const loginFormProps: Record<string, IFormProps> = {
  login: {
    controlName: 'login',
    controlValue: '',
    validators: [Validators.required],
  },
  password: {
    controlName: 'password',
    controlValue: '',
    validators: [Validators.required],
  },
};
