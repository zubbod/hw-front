import { LoginService } from './../services/login.service';
import { LoginFormService } from './../services/login-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

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
