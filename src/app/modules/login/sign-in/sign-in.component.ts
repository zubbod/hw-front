import { Component, OnInit, Input } from '@angular/core';
import { LoginFormService } from '../services/login-form.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    public loginFormService: LoginFormService,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  login = () => {
    const form = this.loginFormService.form$.value;
    if (form.invalid) {
      return;
    }
    const res = this.loginService.login(form.getRawValue()).toPromise();
    console.log(res);
  }

}
