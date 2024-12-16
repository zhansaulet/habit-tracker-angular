import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderAuthComponent } from '../header-auth/header-auth.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    HeaderAuthComponent,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  public isShowPassword = false;

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

  togglePasswordVisibility(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
