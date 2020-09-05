import { RegistrationComponent } from './../registration/registration.component';
import { LoginComponent } from './../../../shared/types/login-components.type';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation, ComponentRef } from '@angular/core';
import { LoginPageType } from './../../../shared/enums/login-page-type.enum';
import { LoginFormService } from './../services/login-form.service';
import { SignInComponent } from './../sign-in/sign-in.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  @ViewChild('form', { static: true, read: ViewContainerRef }) formContainer: ViewContainerRef;

  LoginPageType = LoginPageType;
  currentPageType: LoginPageType = LoginPageType.SignIn;

  constructor(
    public loginFormService: LoginFormService,
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.renderPage(LoginPageType.SignIn);
  }

  renderPage = (type: LoginPageType) => {
    if (this.formContainer) {
      this.formContainer.clear();
    }
    const componentFactory = this.resolver.resolveComponentFactory<LoginComponent>(this.getComponentForRendering(type));
    const componentRef = this.formContainer.createComponent(componentFactory).instance;

    this.setCurrentPageType(type);
  }

  getComponentForRendering = (type: LoginPageType) => {
    switch (type) {
      case LoginPageType.SignIn:
        return SignInComponent;
      case LoginPageType.SignUp:
        return RegistrationComponent;
      default:
        return SignInComponent;
    }
  }

  setCurrentPageType = (type: LoginPageType): void => {
    this.currentPageType = type;
  }
}
