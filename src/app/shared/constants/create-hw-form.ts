import { Validators } from '@angular/forms';
import { IFormProps } from '../interfaces/login-form-props.interface';

export const createHWFormProps: Record<string, IFormProps> = {
  name: {
    controlName: 'name',
    controlValue: '',
    validators: [Validators.required],
  },
  year: {
    controlName: 'year',
    controlValue: '',
    validators: [Validators.required],
  },
  manufacturer: {
    controlName: 'manufacturer',
    controlValue: '',
    validators: [Validators.required],
  },
  type: {
    controlName: 'type',
    controlValue: '',
    validators: [Validators.required],
  },
};
