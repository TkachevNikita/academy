import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { ButtonComponent, DialogService, IconComponent } from '@academy/shared';
import { RequestFormComponent } from '../../components/request-form/request-form.component';

@Component({
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainLayoutComponent, ButtonComponent, IconComponent],
})
export class MainPageComponent {
  private readonly dialogService = inject(DialogService);

  @ViewChild('about')
  public aboutSection!: ElementRef;

  public scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  public sendRequest(): void {
    this.dialogService.open(RequestFormComponent, {
      data: {
        title: 'Оставить заявку',
        width: '800px',
      },
    });
  }
}
