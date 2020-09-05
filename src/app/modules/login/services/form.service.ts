import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ILoginFormProps } from './../../../shared/interfaces/login-form-props.interface';

export class FormService {

  form$: BehaviorSubject<FormGroup> = new BehaviorSubject(null);

  constructor(
    private fb: FormBuilder
  ) { }

  protected createLoginForm(props: Record<string, ILoginFormProps>): FormGroup {
    return this.fb.group(Object.entries(props).reduce((acc, current) => {
      Object.assign(acc, { [current[0]]: [props[current[0]].controlValue, [...props[current[0]].validators]] });
      return acc;
    }, {}));
  }

}