import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ButtonComponent,
  InputComponent,
  TextareaComponent,
} from '@academy/shared';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, ButtonComponent, TextareaComponent],
})
export class MessageFormComponent {}
