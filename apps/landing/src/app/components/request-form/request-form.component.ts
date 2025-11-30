import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  CheckboxComponent,
  FormFieldComponent,
  InputComponent,
  OptionComponent,
  SelectComponent,
} from '@academy/shared';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormFieldComponent,
    InputComponent,
    SelectComponent,
    OptionComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CheckboxComponent,
  ],
})
export class RequestFormComponent {
  private readonly fb = inject(FormBuilder);

  public form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    about: ['', Validators.required],
    profession: ['', Validators.required],
    qualification: ['', Validators.required],
    agreement: [false, Validators.required],
  });

  constructor() {
    this.form.valueChanges.subscribe((r) => console.log(r));
  }
}
