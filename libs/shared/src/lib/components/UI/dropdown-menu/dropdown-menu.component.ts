import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

export interface DropdownItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export class DropdownMenuComponent {
  public label = input('');
  public items = input<DropdownItem[]>([]);

  public isOpen = signal(false);
}
