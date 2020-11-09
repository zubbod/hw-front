import { Component, OnInit } from '@angular/core';
import { LoginFormService } from '../services/login-form.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    public loginFormService: LoginFormService,
    private loginService: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  async login() {
    const form = this.loginFormService.form$.value;
    if (form.invalid) {
      return;
    }
    const { isAuthenticated } = await this.loginService
      .login(form.getRawValue())
      .toPromise();

    if (isAuthenticated) {
      this.router.navigate(['/', 'collection']);
    }
  }
}
