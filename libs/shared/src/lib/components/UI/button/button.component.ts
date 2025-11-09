import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public theme = input<'accent' | 'primary'>('primary');
  public disabled = input(false);
  public size = input<'small' | 'simple'>('simple');

  // todo для иконок в будущем оставлю. ток придется доработать разметку
  public iconStart = input('');
  public iconEnd = input('');
}
