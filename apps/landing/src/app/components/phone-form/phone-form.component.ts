import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
} from '@academy/shared';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, ButtonComponent, TextareaComponent],
})
export class PhoneFormComponent {}
