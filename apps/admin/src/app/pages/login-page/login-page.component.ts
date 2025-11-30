import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  FormFieldComponent,
  InputComponent,
} from '@academy/shared';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormFieldComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  public login(): void {
    setTimeout(() => {
      this.router.navigate(['/courses']);
    }, 1000);
  }
}
