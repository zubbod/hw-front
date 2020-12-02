import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IFormProps } from '../interfaces/login-form-props.interface';

export class FormService {
  form$: BehaviorSubject<FormGroup> = new BehaviorSubject(null);
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  protected createForm(props: Record<string, IFormProps>): FormGroup {
    this.form = this.fb.group(
      Object.entries(props).reduce((acc, current) => {
        Object.assign(acc, {
          [current[0]]: [props[current[0]].controlValue, [...props[current[0]].validators]],
        });
        return acc;
      }, {}),
    );
    return this.form;
  }

  setControlValue(controlName: string, value: string | number | boolean): void {
    this.form.get(controlName).setValue(value);
    this.form$.next(this.form);
  }
}
