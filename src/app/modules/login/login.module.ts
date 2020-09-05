import { RegistrationFormService } from './services/registration-form.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormService } from './services/login-form.service';
import { LoginService } from './services/login.service';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [LoginPageComponent, RegistrationComponent, SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
  ],
  providers: [
    LoginFormService,
    LoginService,
    RegistrationService,
    RegistrationFormService,
  ]
})
export class LoginModule { }
