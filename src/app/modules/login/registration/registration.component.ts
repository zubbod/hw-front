import { Component, OnInit } from '@angular/core';
import { RegistrationFormService } from './../services/registration-form.service';
import { RegistrationService } from './../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public registratioFormService: RegistrationFormService,
    private registrationService: RegistrationService,
  ) { }

  ngOnInit(): void {
  }

  register = () => {
    const form = this.registratioFormService.form$.value;
    if (form.invalid) {
      return;
    }
    const res = this.registrationService.register(form.getRawValue()).toPromise();
    console.log(res);
  }

}
