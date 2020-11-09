import { Validators } from '@angular/forms';
export interface IFormProps {
  controlName: string;
  controlValue: string;
  validators: Validators[];
}
