import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SelectComponent } from '../select.component';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
  imports: [CheckboxComponent, CheckboxComponent],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OptionComponent<T> {
  public parent?: SelectComponent<T>;
  public value = input.required<T>();
  public label = input.required<string>();

  public selected = false;

  public registerParent(parent: SelectComponent<T>): void {
    this.parent = parent;
  }

  public onClick(): void {
    this.parent?.selectOption(this);
  }
}
