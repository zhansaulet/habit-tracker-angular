import { Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';

export const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'resetpassword',
    component: ResetPasswordPageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
];
