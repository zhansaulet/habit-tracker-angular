import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderAuthComponent } from '../header-auth/header-auth.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [
    HeaderAuthComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordPageComponent {
  public resetPwdForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
  });
}
