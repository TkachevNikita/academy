import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DialogService, HeaderComponent, IconComponent } from '@academy/shared';
import { MessageFormComponent } from '../message-form/message-form.component';
import { PhoneFormComponent } from '../phone-form/phone-form.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, IconComponent],
})
export class MainLayoutComponent {
  private readonly dialogService = inject(DialogService);

  public openForm(type: 'message' | 'phone'): void {
    const formComponent =
      type === 'message' ? MessageFormComponent : PhoneFormComponent;

    this.dialogService.open(formComponent, {
      data: {
        title:
          type === 'message'
            ? 'Напишите нам'
            : 'Оставьте ваши контактные данные и мы вам перезвоним',
      },
    });
  }
}
