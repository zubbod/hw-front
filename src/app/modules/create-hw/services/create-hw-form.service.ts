import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createHWFormProps } from '../../../shared/constants/create-hw-form';
import { FormService } from '../../../shared/services/form.service';

@Injectable()
export class CreateHWFormService extends FormService {
  private formProps = createHWFormProps;

  constructor(fb: FormBuilder) {
    super(fb);
    this.form$.next(this.createForm(this.formProps));
  }
}
