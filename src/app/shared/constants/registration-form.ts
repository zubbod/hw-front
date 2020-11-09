import { IFormProps } from '../interfaces/login-form-props.interface';
import { Validators } from '@angular/forms';

export const registrationFormProps: Record<string, IFormProps> = {
  name: {
    controlName: 'name',
    controlValue: '',
    validators: [Validators.required],
  },
  email: {
    controlName: 'email',
    controlValue: '',
    validators: [Validators.required, Validators.email],
  },
  password: {
    controlName: 'password',
    controlValue: '',
    validators: [Validators.required],
  },
};
